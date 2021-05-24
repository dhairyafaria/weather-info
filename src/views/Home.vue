<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <v-app id="inspire">
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>
            <div>
              <div>
                <span class="font-weight-bold">Location: </span>
                {{ location }}
              </div>
              <div>
                <span class="font-weight-bold">Current Temperature: </span>
                {{ todayCityData.currentTemparature }}°C
                </div>
              <div>
                <span class="font-weight-bold">Current Day Condition: </span>
                {{ todayCityData.currentDayCondition }}
                </div>
              <div>
                <span class="font-weight-bold">Today's High: </span>
                {{ todayCityData.high }}°C
              </div>
              <div>
                <span class="font-weight-bold">Today's Low: </span>
                {{ todayCityData.low }}°C
              </div>
            </div>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-container>
              <v-row>
                <v-col  lg="4" md="6" sm="12" cols="12">
                  <v-card class="weather-card">
                    <v-card-text>
                      <h2 class="font-weight-black">Wind</h2>
                      <div>
                        Chill: {{ todayCityData.wind.chill }}
                        Direction: {{ todayCityData.wind.direction }}
                        Speed: {{ todayCityData.wind.speed }}
                      </div>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col  lg="4" md="6" sm="12" cols="12">
                  <v-card class="weather-card">
                    <v-card-text>
                      <h2 class="font-weight-black">Atmosphere</h2>
                      <div>
                        Humidity: {{ todayCityData.atmosphere.humidity }}
                        Visibility: {{ todayCityData.atmosphere.visibility }}
                        Pressure: {{ todayCityData.atmosphere.pressure }}
                      </div>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col lg="4" md="6" sm="12" cols="12">
                  <v-card class="weather-card">
                    <v-card-text>
                      <h2 class="font-weight-black">astronomy</h2>
                      <div>
                        Sunrise: {{ todayCityData.astronomy.sunrise }}
                        Sunset: {{ todayCityData.astronomy.sunset }}
                      </div>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-app>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  data() {
    return {
      todayCityData: this.$store.getters.getTodaysWeatherDetails,
    };
  },
  computed: {
    location() {
      return `${this.todayCityData.city}, ${this.todayCityData.country}`;
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  .weather-card{
    margin: 0 20px;
  }
}
</style>
