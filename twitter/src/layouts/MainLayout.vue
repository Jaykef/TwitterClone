<template>
  <q-layout view="lHr lpR fFf">

    <q-header class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round @click="left = !left"> 
          <q-avatar size="30px">
            <img src="https://en.gravatar.com/userimage/195372590/da116c52eae60358f364d774122920f0.jpg">
          </q-avatar>
        </q-btn>

        <q-toolbar-title class="text-weight-bold">
          <span class="gt-sm">{{ $route.name }}</span>
          <q-icon
            class="header-icon q-pa-md lt-md"
            name="fab fa-twitter"
            size="sm"
            color="primary"
          />
        </q-toolbar-title>

        <q-btn dense flat round @click="right = !right"> 
          <q-avatar size="30px">
            <img src="https://en.gravatar.com/userimage/195372590/de229c036912ae8f22b80b1c747808b9.jpg">
          </q-avatar>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="left"
      side="left"
      :width="283"
      bordered
      show-if-above
    >
      <q-avatar class="q-pa-md" size="60px">
        <img src="https://en.gravatar.com/userimage/195372590/da116c52eae60358f364d774122920f0.jpg">
      </q-avatar>

      <q-item class="text-h6 text-weight-bold name">Jaward(苏杰)</q-item>
      <q-item class="text-p">@jaykef</q-item>
      <q-item class="text-h7 text-weight-bold">20 Following   100 Followers</q-item>
      <q-list>
        <q-item
          class="item"
          to="/"
          v-ripple
          clickable
          exact

        >
          <q-item-section avatar >
            <q-icon
              name="far fa-user"
              size="sm"
            />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">Profile</q-item-section>
        </q-item>
        <q-item
          class="item"
          to="/about"
          v-ripple
          clickable
          exact

        >
          <q-item-section avatar >
            <q-icon
              name="far fa-list-alt"
              size="sm"
            />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">Lists</q-item-section>
        </q-item>

        <q-item
          class="item"
          to="/about"
          v-ripple
          clickable
          exact

        >
          <q-item-section avatar >
            <q-icon
              name="far fa-comment"
              size="sm"
            />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">Topics</q-item-section>
        </q-item>

        <q-item
          class="item"
          to="/about"
          v-ripple
          clickable
          exact

        >
          <q-item-section avatar >
            <q-icon
              name="far fa-bookmark"
              size="sm"
            />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">Bookmarks</q-item-section>
        </q-item>

        <q-item
          class="item"
          to="/about"
          v-ripple
          clickable
          exact

        >
          <q-item-section avatar >
            <q-icon
              name="fab fa-twitter-square"
              size="sm"
            />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">Twitter Blue</q-item-section>
        </q-item>

        <q-item
          class="item"
          to="/about"
          v-ripple
          clickable
          exact

        >
          <q-item-section avatar >
            <q-icon
              name="far fa-bolt"
              size="sm"
            />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">Moments</q-item-section>
        </q-item>

        <q-item
          class="item"
          to="/about"
          v-ripple
          clickable
          exact

        >
          <q-item-section avatar >
            <q-icon
              name="far fa-shopping-cart"
              size="sm"
            />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">Purchases</q-item-section>
        </q-item>

        <q-item
          class="item"
          to="/about"
          v-ripple
          clickable
          exact

        >
          <q-item-section avatar >
            <q-icon
              name="far fa-money-bills"
              size="sm"
            />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">Monetization</q-item-section>
        </q-item>
      </q-list>

      <q-item
          class="item"         
          to="/about"
          v-ripple
          clickable
          exact

        >
          <q-item-section avatar >
            <q-icon
              name="far fa-rocket"
              size="sm"
            />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">Twitter for Professionals</q-item-section>
        </q-item>
      </q-list>

    </q-drawer>

    <q-drawer show-if-above v-model="right" side="right" bordered>
      <q-input
        placeholder="Search Twitter"
        class="q-ma-md"
        outlined
        rounded
        dense
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>

      <q-list
        separator
        padding
      >
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">Education</q-item-label>
            <q-item-label class="text-weight-bold">Something amazing happened!</q-item-label>
            <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">Education</q-item-label>
            <q-item-label class="text-weight-bold">Something amazing happened!</q-item-label>
            <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">Education</q-item-label>
            <q-item-label class="text-weight-bold">Something amazing happened!</q-item-label>
            <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: false,
      right: false
    }
  }
}
</script>

<style lang="sass">
.header-icon
  position: absolute
  bottom: 0
  left: 50%
  transform: translateX(-50%)


</style>

<style lang="scss">
.name {
  margin-top: 13px;
  margin-bottom: -14px;
}
.text-h7 {
  margin-top: -16px;
}
.item {
  margin-bottom: 18px
}
.left {
  padding-left: 16px;
}
</style>