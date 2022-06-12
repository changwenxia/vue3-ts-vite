<template>
    <Collapse />
    <Breadcrumb />
</template>

<script setup lang="ts">
import {Fold, Expand} from '@element-plus/icons-vue';
import {ref, computed} from 'vue'
import Collapse from './Collapse.vue'
import Breadcrumb from './Breadcrumb.vue'
const status = ref(false)
</script>

<style lang="scss" scoped>
.icons {
  display: flex;
  align-items: center;
  font-size: 24px;
  color: #303133;
  cursor: pointer;
  margin-right: 15px;
}
</style>
