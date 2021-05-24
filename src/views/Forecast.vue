<template>
  <div class="about">
    <v-app id="inspire">
      <div class="container">
        <canvas id="line-chart" width="400" height="400"></canvas>
      </div>
    </v-app>
  </div>
</template>
<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import Chart from 'chart.js/auto';

export default {
  name: 'Forecast',
  data() {
    return {
      foreCastData: this.$store.getters.getForeCastDetails,
    };
  },
  mounted() {
    const ctx = document.getElementById('line-chart');
    this.lineChart = new Chart(ctx, this.chartData);
  },
  computed: {
    chartData() {
      return {
        type: 'line',
        data: {
          labels: this.foreCastData.map((i) => i.day),
          datasets: [{
            label: 'High temperature',
            data: this.foreCastData.map((i) => i.high),
            backgroundColor: 'red',
          },
          {
            label: 'Low temperature',
            data: this.foreCastData.map((i) => i.low),
            backgroundColor: 'yellow',
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Chart.js Line Chart',
            },
          },
        },
      };
    },
  },
};
</script>
