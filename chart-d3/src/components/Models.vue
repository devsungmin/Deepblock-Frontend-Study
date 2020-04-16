<template>

    <v-container>
        <h2>Navigation-drawer</h2>
            <v-navigation-drawer
                    v-model="drawer"
                    :color="color"
                    :expand-on-hover="true"
                    :mini-variant="miniVariant"
                    :right="right"
                    :src="bg"
                    absolute
                    dark
            >
                <v-list
                        rounded
                        nav
                        class="py-0"
                >
                    <v-list-item two-line :class="miniVariant && 'px-0'" >
                        <v-list-item-avatar>
                            <img src="../../image/iu.jpg">
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>IU</v-list-item-title>
                            <v-list-item-subtitle>가수</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-divider></v-divider>

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
                <v-switch
                        v-model="right"
                        class="ma-2"
                        label="right"
                ></v-switch>
            </v-navigation-drawer>
        <model>
            <chart/>
        </model>
    </v-container>

</template>

<script>
    import model from "./Model"
    import chart from "./Chart"
    export default {
        components: {
            model,
            chart
        },
        data () {
            return {
                drawer: true,
                items: [
                    { title: '음', icon: 'mdi-view-dashboard', lnk: '/' },
                    { title: '오', icon: 'mdi-image', lnk: '/model' },
                    { title: '아', icon: 'mdi-help-box', lnk: '/test' },
                    { title: '예', icon: 'mdi-image', lnk: '/home'}
                ],
                color: 'primary',
                right: false,
                miniVariant: false,
                expandOnHover: false,
            }
        }
    }
</script>
<style lang="scss">
.test{
    text-align: center;
}
</style>