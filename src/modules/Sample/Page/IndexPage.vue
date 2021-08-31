<template>
    <div class="m-page m-page-index">

        <div class="columns justify-spece-between">
            <div
                v-if="isReady"
                class="column is-12"
            >
                <SampleView/>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
import { Route, Component } from '@/intiv/core/Vue/Annotations';
import BaseComponent from '@/intiv/core/Vue/BaseComponent.vue';
import SampleView from '#/Sample/Component/SampleView.vue';
import { namespace } from 'vuex-class';


const ConfigStore = namespace('Dapp/Config');

@Route('/', 'dapp')
@Component({
    components: {
        SampleView,
    }
})
export default class IndexPage
    extends BaseComponent
{

    public isReady : boolean = false;

    public async mounted()
    {
        this.isReady = true;
    }

}
</script>
