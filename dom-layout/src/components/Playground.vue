<template>
    <v-container>
        <h2>Navigation-drawer</h2>
        <v-row justify="space-around">
            <v-switch
                    v-model="drawer"
                    class="ma-2"
                    label="활성화"
                    id="test"
            />
        </v-row>
            <v-navigation-drawer
                    v-model="drawer"
                    :color="color"
                    :expand-on-hover="expandOnHover"
                    :mini-variant="miniVariant"
                    :right="right"
                    :src="bg"
                    absolute
                    dark
            >
                <v-list
                        dense
                        nav
                        class="py-0"
                >
                    <v-list-item two-line :class="miniVariant && 'px-0'">
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
                            link
                    >
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
                <v-switch
                        v-model="miniVariant"
                        class="ma-2"
                        label="작게"
                ></v-switch>

                <v-switch
                        v-model="right"
                        class="ma-2"
                        label="오른쪽으로"
                ></v-switch>
            </v-navigation-drawer>
    </v-container>
</template>

<script>
    export default {
        data () {
            return {
                drawer: true,
                items: [
                    { title: '음', icon: 'mdi-view-dashboard' },
                    { title: '오', icon: 'mdi-image' },
                    { title: '아', icon: 'mdi-help-box' },
                    { title: '예', icon: 'mdi-image'}
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