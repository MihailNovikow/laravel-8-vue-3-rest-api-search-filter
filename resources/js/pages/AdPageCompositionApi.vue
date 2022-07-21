<template>
  <div>
    <h1>Страница с объявлениями</h1>
    <my-input
      v-model="searchQuery"
      placeholder="Поиск...."
      v-focus
    />
    <div class="app__btns">
      <my-button
      >
        Создать объявление
      </my-button>
      <my-select
        v-model="selectedSort"
        :options="sortOptions"
      />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <ads-create
      />
    </my-dialog>
    <ads-index
      :posts="sortedAndSearchedAds"
      v-if="!isAdsLoading"
    />
    <div v-else>Идет загрузка...</div>
  </div>
</template>

<script>
import AdsCreate from "../components/ads/AdsCreate";
import AdsIndex from "../components/ads/AdsIndex";
import MyButton from "../components/UI/MyButton";
import axios from 'axios';
import MySelect from "../components/UI/MySelect";
import MyInput from "../components/UI/MyInput";
import {ref} from 'vue';
import {useAds} from "../hooks/useAds";
import useSortedAds from "../hooks/useSortedAds";
import useSortedAndSearchedAds from "../hooks/useSortedAndSearchedAds";
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
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержимому'},
      ]
    }
  },
  setup(props) {
    const {posts, totalPages, isAdsLoading} = useAds(10);
    const {sortedAds, selectedSort} = useSortedAds(ads);
    const {searchQuery, sortedAndSearchedAds} = useSortedAndSearchedAds(sortedAds)

    return {
      posts,
      totalPages,
      isAdsLoading,
      sortedAds,
      selectedSort,
      searchQuery,
      sortedAndSearchedAds,
    }
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
