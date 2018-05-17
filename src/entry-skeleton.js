/*
 * @Author: seven.zhang 
 * @Date: 2018-05-17 13:48:36 
 * @Last Modified by: seven.zhang
 * @Last Modified time: 2018-05-17 13:49:08
 */
import Vue from 'vue';
import Skeleton1 from './Skeleton1';
import Skeleton2 from './Skeleton2';


export default new Vue({
    components: {
        Skeleton1,
        Skeleton2
    },
    template: `
        <div>
            <skeleton1 id="skeleton1" style="display:none"/>
            <skeleton2 id="skeleton2" style="display:none"/>
        </div>
    `
});