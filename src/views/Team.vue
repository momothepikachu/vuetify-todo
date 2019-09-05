<template>
  <div class="team">
    <h1 class="subheading grey--text">This is an team page</h1>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="ma-3 text-center">
            <v-img class="pt-4 align-center justify-center" src="">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="require(`@/assets${person.avatar}`)" />
              </v-avatar>
            </v-img>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="grey">
                <v-icon small left>message</v-icon>
                <span class="">Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    team: [
      {
        name: "The Net Ninja",
        role: "Web developer",
        avatar: "/avatar-1.png"
      },
      {
        name: "Ryu",
        role: "Graphic designer",
        avatar: "/avatar-2.png"
      },
      {
        name: "Chun Li",
        role: "Web developer",
        avatar: "/avatar-3.png"
      },
      {
        name: "Gouken",
        role: "Social media maverick",
        avatar: "/avatar-4.png"
      },
      { name: "Yoshi", role: "Sales guru", avatar: "/avatar-5.png" }
    ]
  })
};
</script>
