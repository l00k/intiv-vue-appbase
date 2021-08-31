<template>
    <div>
        <div class="card mb-4 m-context__connection">
            <header class="card-header">
                <div class="card-header-title is-justify-content-space-between">
                    <div class="app-name">Sample</div>
                    <div class="build-info">{{ buildVersion }}</div>
                </div>
            </header>
            <div class="card-content">
                <div class="content">

                    <h1>Ready</h1>

                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component } from '@/intiv/core/Vue/Annotations';
import BaseComponent from '@/intiv/core/Vue/BaseComponent.vue';


declare const window;

@Component({
    components: {}
})
export default class SampleView
    extends BaseComponent
{

    public get buildVersion()
    {
        return window.appData.buildVersion;
    }

}
</script>

<style scoped lang="scss">
.build-info {
    font-size: 0.7rem;
}
</style>
