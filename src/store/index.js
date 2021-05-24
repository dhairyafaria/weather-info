import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cityData: {},
  },
  mutations: {
    updateCityDetails(state, payload) {
      state.cityData = payload;
    },
  },
  getters: {
    getTodaysWeatherDetails(state) {
      const { country, city } = state.cityData.location;
      const {
        wind, atmosphere, astronomy, condition,
      } = state.cityData.current_observation;
      const currentTemparature = condition.temperature;
      const currentDayCondition = condition.text;
      const { high, low } = state.cityData.forecasts.slice(1, 2)[0];

      return {
        country,
        city,
        wind,
        atmosphere,
        astronomy,
        currentTemparature,
        currentDayCondition,
        high,
        low,
      };
    },
    getForeCastDetails: (state) => state.cityData.forecasts.slice(2),
  },
});
