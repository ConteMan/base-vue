<template>
    <div>
        <a-button class="btn-version" @click="changeVersion">Change Version</a-button>
        <!-- v1 版 -->
        <div v-if="layoutVersion == 'v1'" class="c-root">
            <c-header></c-header>
            <router-view/>
        </div>

        <!-- v2 版 -->
        <template v-if="layoutVersion == 'v2'">
            <div class="v2-des">this is layout v2</div>
            isPC: {{ isPC }}
        </template>
    </div>
</template>

<script>
    import { mixin } from '@/utils/mixin'
    import { mapMutations } from "vuex"

    import CHeader from '@/layout/components/Header'

    export default {
        name: "BaseLayout",
        components: {
            CHeader,
        },
        data() {
            return {
                fullWidth: document.body.clientWidth,
                timer: false,
                drawerVisible: false,
                menuVisible: true,
            }
        },
        mixins: [ mixin ],
        computed: {
            isPC: function () {
                return !/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)
            }
        },
        mounted() {
            window.onresize = () => {
                if(!this.timer) {
                    this.timer = true
                    setTimeout(
                        () => {
                            this.fullWidth = document.body.clientWidth
                            this.timer = false
                        }, 400)
                }
            }
        },
        methods: {
            ...mapMutations({
                layoutVersionCommit: 'LAYOUT_VERSION',
            }),
            changeVersion() {
                const version = this.layoutVersion == 'v1' ? 'v2' : 'v1'
                this.layoutVersionCommit(version)
            }
        },
        beforeRouteLeave (to, from, next) {
            next()
        },
    }
</script>

<style scoped lang="less">
    @import "~@/style/variables";

    .c-root {
        height: 100%;
    }
    .btn-version {
        margin: 20px;
    }
    .v2-des {
        font-size: 20px;
        color: green;
        padding: 20px;
    }
</style>
