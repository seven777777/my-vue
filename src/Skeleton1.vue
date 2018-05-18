<template>
    <div class="skeleton-wrapper">
        <header class="skeleton-header"></header>
        <section class="skeleton-block">
            <p class="skeleton-block-title"></p>
            <p class="skeleton-block-con"></p>
            <p class="skeleton-block-con"></p>
            <p class="skeleton-block-con"></p>
        </section>
    </div>
</template>

<script>
export default {
    name: 'skeleton2'
};
</script>

<style scoped>
.skeleton-header {
    height: 152px;
    background: grey;
    margin-top: 60px;
    width: 152px;
    margin: 60px auto;
}
.skeleton-block {
    display: flex;
    flex-direction: column;
    padding-top: 8px;
}
.skeleton-block-title{
    height: 38px;
    background: #ececec;
    margin: 0 auto;
    width: 200px;
}
.skeleton-block-con{
    height: 38px;
    background: #ececec;
    margin: 0 auto;
    margin-top: 20px;
    width: 300px;
}
</style>