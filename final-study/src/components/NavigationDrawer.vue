<template>
    <v-navigation-drawer
            v-model="drawer"
            :color="color"
            :expand-on-hover="true"
            :mini-variant="miniVariant"
            :right="right"
            absolute
    >
        <v-list
                rounded
                nav
                class="py-0"
        >
            <v-list-item two-line :class="miniVariant && 'px-0'" >
                <v-list-item-avatar>
                    <img src="../image/iu.jpg">
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>IU</v-list-item-title>
                    <v-list-item-subtitle>가수</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider/>

            <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    :href=item.lnk
            >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }} </v-list-item-title>
                </v-list-item-content>
                <!--  각각의 리스트 하이퍼 링크 -->
                <a href="link"></a>
            </v-list-item>
        </v-list>
        <v-switch v-model="right" class="ma-2" label="right"/>
        <template v-slot:append>
            <div class="pa-2">
                <v-btn block>Logout</v-btn>
            </div>
        </template>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: "NavigationDrawer"
    }
</script>

<style scoped>

</style>