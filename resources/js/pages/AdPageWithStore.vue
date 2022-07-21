<template>
  <div>
    <h1>Страница с объявлениями</h1>
    <my-input
      :model-value="searchQuery"
      ..update:model-value="setSearchQuery"
      placeholder="Поиск...."
      v-focus
    />
    <div class="app__btns">
      <my-button
        ..click="showDialog"
      >
        Создать пользователя
      </my-button>
      <my-select
        :model-value="selectedSort"
        ..update:model-value="setSelectedSort"
        :options="sortOptions"
      />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <ads-create
        ..create="createAd"
      />
    </my-dialog>
    <ads-index
      :ads="sortedAndSearchedAds"
      ..remove="removeAd"
      v-if="!isAdsLoading"
    />
    <div v-else>Идет загрузка...</div>
    <div v-intersection="loadMoreAds" class="observer"></div>
    <div class="page__wrapper">
      <div
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        class="page"
        :class="{
              'current-page': page === pageNumber
            }"
        ..click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div>
  </div>
</template>

<script>
import AdsCreate from "../components/ads/AdsCreate";
import AdsIndex from "../components/ads/AdsIndex";
import MyButton from "../components/UI/MyButton";
import axios from 'axios';
import MySelect from "../components/UI/MySelect";
import MyInput from "../components/UI/MyInput";
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  components: {
    MyInput,
    MySelect,
    MyButton,
    AdsIndex, AdsCreate
  },
  data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    ...mapMutations({
      setPage: 'ad/setPage',
      setSearchQuery: 'ad/setSearchQuery',
      setSelectedSort: 'ad/setSelectedSort',
    }),
    ...mapActions({
      loadMoreAds: 'ad/loadMoreAds',
      fetchAds: 'ad/fetchAds'
    }),
    createAd(ad) {
      this.ads.push(ad);
      this.dialogVisible = false;
    },
    removeAd(ad) {
      this.ads = this.ads.filter(p => p.id !== ad.id)
    },
    showDialog() {
      this.dialogVisible = true;
    },
  },
  mounted() {
    this.fetchAds();
  },
  computed: {
    ...mapState({
      ads: state => state.ad.ads,
      isAdsLoading: state => state.ad.isAdsLoading,
      selectedSort: state => state.ad.selectedSort,
      searchQuery: state => state.ad.searchQuery,
      page: state => state.ad.page,
      limit: state => state.ad.limit,
      totalPages: state => state.ad.totalPages,
      sortOptions: state => state.ad.sortOptions
    }),
    ...mapGetters({
      sortedAds: 'ad/sortedAds',
      sortedAndSearchedAds: 'ad/sortedAndSearchedAds'
    })
  },
  watch: {
    // page() {
    //   this.fetchAds()
    // }
  }
}
</script>

<style>

.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
.page__wrapper {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid black;
  padding: 10px;
}
.current-page {
  border: 2px solid teal;
}

.observer {
  height: 30px;
  background: green;
}
</style>
