<template>
  <div>
    <h1>Страница с постами</h1>
    <my-input
      v-model="searchQuery"
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
        v-model="selectedSort"
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
    <!--    <div class="page__wrapper">-->
    <!--      <div-->
    <!--        v-for="pageNumber in totalPages"-->
    <!--        :key="pageNumber"-->
    <!--        class="page"-->
    <!--        :class="{-->
    <!--          'current-page': page === pageNumber-->
    <!--        }"-->
    <!--        ..click="changePage(pageNumber)"-->
    <!--      >-->
    <!--        {{ pageNumber }}-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<script>

import AdsIndex from "../components/ads/AdsIndex";
import MyButton from "../components/UI/MyButton";
import axios from 'axios';
import MySelect from "../components/UI/MySelect";
import MyInput from "../components/UI/MyInput";
import AdsCreate from "../components/ads/AdsCreate.vue";

export default {
  components: {
    MyInput,
    MySelect,
    MyButton,
    AdsIndex,
    AdsCreate
},
  data() {
    return {
      ads: [],
      dialogVisible: false,
      isAdsLoading: false,
      selectedSort: '',
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержимому'},
      ]
    }
  },
  methods: {
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
    // changePage(pageNumber) {
    //   this.page = pageNumber
    // },
    async fetchAds() {
      try {
        this.isAdsLoading = true;
        const response = await axios.get('/api/ads', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.ads = response.data;
      } catch (e) {
        alert('Ошибка')
      } finally {
        this.isAdsLoading = false;
      }
    },
    async loadMoreAds() {
      try {
        this.page += 1;
        const response = await axios.get('/api/ads', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.ads = [...this.ads, ...response.data];
      } catch (e) {
        alert('Ошибка')
      }
    }
  },
  mounted() {
    this.fetchAds();
    // const options = {
    //   rootMargin: '0px',
    //   threshold: 1.0
    // }
    // const callback = (entries, observer) => {
    //   if (entries[0].isIntersecting && this.page < this.totalPages) {
    //     this.loadMoreAds()
    //   }
    // };
    // const observer = new IntersectionObserver(callback, options);
    // observer.observe(this.$refs.observer);
  },
  computed: {
    sortedAds() {
      return [...this.ads].sort((ad1, ad2) => ad1[this.selectedSort]?.localeCompare(ad2[this.selectedSort]))
    },
    sortedAndSearchedAds() {
      return this.sortedAds.filter(ad => ad.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
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
