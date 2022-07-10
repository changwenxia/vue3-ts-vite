<template>
    <div class="container">
        <div id="allmap" class="map"></div>
        <p class="errortext" ref="errtext"></p>
    </div>
</template>

<script setup lang="ts">

<script>

export default {
    data() {
        return {
            options: {
                enableHighAccuracy: true, // --->是否获取更精确的位置  true/false
                timeout: 5000, // --->请求超时时间,单位ms；
                maximumAge: 0
            }
        };
    },
    created() {
        // 百度地图API功能
        this.$nextTick(() => {
            this.getLocation();
            let watch1 = window.navigator.geolocation.watchPosition(
                this.getLocation
            );
            // watchPosition()方法：不停的获取和更新用户的地理位置信息，执行间隔时间0ms；当设备地理位置发生改变时，自动调用；  好像删除也么有影响
            console.log(watch1);
            // 清除watch1
            window.navigator.geolocation.clearWatch(watch1);
        });
    },
    methods: {
        getLocation() {
            if (navigator.geolocation) {
                let geolocation = new BMap.Geolocation(); // 将navigator.geolocation 替换成 new BMap.Geolocation() 完美解决window.navigator.geolocation.getCurrentPosition，在IOS10系统中无法定位问题
                geolocation.getCurrentPosition(
                    position => {
                        console.log(position);
                        let x = position.latitude; // ---> 与H5 中的地理定位 若navigator.geolocation.getCurrentPosition(success,error,options)  则 let x = position.coords.latitude 一样   纬度
                        let y = position.longitude; // 经度
                        this.print(y, x);
                    },
                    error => {
                        switch (error.code) {
                            case error.PERMISSION_DENIED:
                                this.$refs.errortext.innerText =
                                    error.code +
                                    ':User denied the request for Geolocation.'; // code == 1 用户拒绝
                                break;
                            case error.POSITION_UNAVAILABLE:
                                this.$refs.errortext.innerText =
                                    'Location information is unavailable.'; // code == 2 无法获取
                                break;
                            case error.TIMEOUT:
                                this.$refs.errortext.innerText =
                                    'The request to get user location timed out.'; // code == 3 请求超时
                                break;
                            case error.UNKNOWN_ERROR:
                                this.$refs.texterror.innerText =
                                    'An unknown error occurred.'; // 一个未知的错误
                                break;
                        }
                    },
                    this.options
                );
            }
        },
        print(y, x) {
            let that = this;
            let point = new BMap.Point(y, x); // -----> 当前y,x 坐标 是实时动态的经纬度值
            console.log(point);
            let map = new BMap.Map('allmap'); // --->创建一个map实例  id='allmap' allmap是显示地图的元素的id
            console.log(map);
            map.centerAndZoom(point, 18); // --> 显示级数越大越细
            map.addOverlay(new BMap.Marker(point)); // ---->定点坐标红点覆盖
            map.enableScrollWheelZoom(true);
            let geoc = new BMap.Geocoder(); // --> 创建BMap.Geocoder 实例
            map.addEventListener('click', function (e) {
                /** 通过点击百度地图，可以获取到对应的point, 由point的lng、lat属性就可以获取对应的经度纬度 */

                let pt = e.point;
                console.log(pt);
                geoc.getLocation(pt, function (rs) {
                    /** addressComponents对象可以获取到详细的地址信息 */
                    let addComp = rs.addressComponents;
                    console.log(addComp);
                    let site =
                        addComp.province +
                        ', ' +
                        addComp.city +
                        ', ' +
                        addComp.district +
                        ', ' +
                        addComp.street +
                        ', ' +
                        addComp.streetNumber;
                    console.log(site);
                    that.$refs.errortext.innerText = site;
                });
            });
        }
    }
};
</script>
<style scoped>
#allmap {
    width: 20rem;
    height: 20rem;
    margin: 50px auto;
}
.text {
    height: 1.25rem;
    color: red;
    line-height: 1.25rem;
}
</style>

</script>

<style lang="scss" scoped></style>
