<template>
    <v-container>
        <v-btn class="mx-2" fab dark small color="#42b983" @click.stop="drawer = !drawer">
            <v-icon color="#000000">mdi-format-list-bulleted-square</v-icon>
        </v-btn>
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
                        <img src="../../image/iu.jpg">
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
        <model/>
    </v-container>

</template>

<script>
    import model from "./Model"
    export default {
        components: {
            model
        },
        data() {
            return {
                drawer: true,
                items: [
                    {title: '음', icon: 'mdi-view-dashboard', lnk: '/'},
                    {title: '오', icon: 'mdi-image', lnk: '/model'},
                    {title: '아', icon: 'mdi-help-box', lnk: '/test'},
                    {title: '예', icon: 'mdi-image', lnk: '/home'}
                ],
                color: 'primary',
                right: false,
                miniVariant: false,
                background: true,
                expandOnHover: false,
            }
        }
    }
</script>
<style lang="scss">
    .test{
        text-align: center;
    }
    .mx-2 {
        color: #42b983;
    }
</style>