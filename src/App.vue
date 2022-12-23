<template>
  <v-app>
    <v-main>
      <template>
        <v-container>
          <v-data-table
            :headers="header"
            :items="data"
            :items-per-page="5"
            item-key="id"
            disable-sort
            hide-default-footer
            class="elevation-1"
          ></v-data-table>
        </v-container>
      </template>
    </v-main>

    <v-main>
      <router-view />
    </v-main>
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
      header: [{ text: "region_cd", value: "region_cd" }]
    };
  },
  created() {
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
            (this.data = a.data.StanReginCd.row),
            console.log(a.data.StanReginCd.row[0])
          )
        );
    }
  }
};
</script>