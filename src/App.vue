<template>
  <v-app>
    <v-main>
      <template>
        <v-app-bar elevate-on-scroll elevation="4">
          <v-app-bar-title>RealEstate Trade System(부동산 실거래 조회)</v-app-bar-title>
          <v-spacer />

          <template #extension>
            <v-tabs fixed-tabs background-color="secondary">
              <v-tabs-slider color="red lighten-1" />
              <v-tab :to="{ name: 'Apartment' }" class="text-body-1">
                <v-icon left>mdi-office-building</v-icon>아파트
              </v-tab>
              <v-tab :to="{ name: 'MultiFamily' }" class="text-body-1">
                <v-icon left>mdi-home-group</v-icon>연립/다세대
              </v-tab>
              <v-tab :to="{ name: 'MultiHouse' }" class="text-body-1">
                <v-icon left>mdi-home</v-icon>단독/다가구
              </v-tab>
              <v-tab :to="{ name: 'Officetel' }" class="text-body-1">
                <v-icon left>mdi-city-variant</v-icon>오피스텔
              </v-tab>
            </v-tabs>
          </template>
        </v-app-bar>
      </template>
    </v-main>

    <v-main>
      <router-view />
    </v-main>
    <v-footer app dark class="justify-end text-body-2">부동산 실거래 조회 시스템 Develope v1.0</v-footer>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  name: "App",

  data() {
    return {
      key:
        "bx5Feaub8FfLGLBgQkewGgIrdf5hJaqr%2FGqudrfyCZ7lwc%2FkzoAozvFaT5GXf0CvycvgvbaJC5dgpRS1m%2Fdzog%3D%3D",
      data: [],
      header: [{ text: "region_cd", value: "region_cd" }],
      PageNo: 1
    };
  },
  mounted() {
    this.testGet();
  },
  methods: {
    testGet() {
      axios
        .get(
          `https://apis.data.go.kr/1741000/StanReginCd/getStanReginCdList?serviceKey=${this.key}&pageNo=1&numOfRows=3&type=json&locatadd_nm=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C`
        )
        .then(
          a => (
            (this.data = a.data.StanReginCd[1].row),
            console.log(a.data.StanReginCd[1].row[0].region_cd)
          )
        );
    }
  }
};
</script>