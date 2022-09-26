<template>
  <div class="form__select select" :class="{'select_show' : isOpen}" @click="toggleSelect()">
    <button type="button" class="select__toggle" :class="{'active' : value}">
      <template v-if="value">
        <span>{{ value.name }}</span>
      </template>
      <template v-else>
        <span>{{ placeholder }}</span>
      </template>
    </button>

    <div class="select__dropdown">
      <ul class="select__options">
        <li v-for="(item, i) in list" :key="i" class="select__option" @click.stop="changeSelect(item)">{{
            item.name
          }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectComponent",
  props: {
    list: {
      type: Array,
      default: () => []
    },
    value: {
      type: Object,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggleSelect() {
      this.isOpen = !this.isOpen
    },
    changeSelect(item) {
      this.isOpen = false
      this.$emit('change', item)
    }
  }
}
</script>

<style lang="scss">
.select {
  position: relative;
  width: 100%;
  cursor: pointer;
  background: #f3f5f9;
  outline: none;

  &--error {
    .select__toggle {
      border-color: red;
    }
  }
}

.select__toggle {
  position: relative;
  overflow: hidden;
  outline: none;
  height: 59px;
  white-space: nowrap;
  padding: 15px 20px;
  width: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  border-radius: 5px;
  color: rgba(#8a9cc0, 0.5);
  text-align: left;
  font-family: inherit;
  background-color: #fff;
  cursor: pointer;
  border: 1px solid transparent;
  transition: .3s ease;

  &:hover {
    border: 1px solid #2956EF;
  }

  &.active {
    color: #303139;
  }

  span {
    z-index: 1;
    top: 50%;
    left: 20px;
    position: absolute;
    transform: translateY(-50%);
  }
}

.select__toggle::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 20px;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  margin-left: 1rem;
  transform: translateY(-50%);
  z-index: 10;
  background-size: cover;
  background-image: url("../../assets/img/icons/arrow-down.svg");
  transition: all 0.25s ease;
}

.select__toggle::before {
  content: "";
  width: 48px;
  height: 100%;
  z-index: 10;
  position: absolute;
  right: 0;
  top: 0;
}

.select__toggle:focus {
  outline: none;
}

.select_show .select__toggle::after {
  transform: translateY(-50%) rotateX(180deg);
}

.select__dropdown {
  overflow: hidden;
  opacity: 0;
  transition: 0.25s ease;
  visibility: hidden;
  transform: translateY(-20px);
  z-index: 1000;
  position: absolute;
  top: 64px;
  left: 0;
  right: 0;
  background: #fff;
  box-shadow: 0 4px 20px rgba(165, 170, 189, 0.3);

  border-radius: 6px;
}

.select_show .select__dropdown {
  opacity: 1;
  visibility: visible;
  transform: translate(0);
}

.select_show .select__backdrop {
  display: block;
}

.select__options {
  max-height: 200px;
  padding: 15px;
  margin: 0;

  list-style: none;
}

.select__option {
  cursor: pointer;

  white-space: nowrap;
  transition: color 0.25s ease;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: black;

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  &:first-child {
    border-radius: 6px 6px 0 0;
  }

  &:last-child {
    border-radius: 0 0 6px 6px;
  }

  &:hover {
    color: #2956EF;
  }
}

</style>
