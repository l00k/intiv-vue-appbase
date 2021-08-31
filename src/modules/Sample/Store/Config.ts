import App from '@/intiv/core/App';
import { StoreManager } from '@/intiv/core/Store';
import { ObjectManager } from '@/intiv/utils/ObjectManager';
import { Module, VuexModule } from 'vuex-module-decorators';


@Module({
    dynamic: true,
    store: ObjectManager.getInstance(App).getVuexStore(),
    preserveState: StoreManager.isModulePersisted('Monitor/Config'),
    namespaced: true,
    name: 'Monitor/Config',
})
export default class ContextStore
    extends VuexModule<ContextStore>
{

}
