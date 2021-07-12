<template>
  <div>
    <el-button type="text" @click="show()">点击打开封装表单</el-button>
    <form-package :ruleForm="ruleForm" :rules="rules" ref="formPackage"></form-package>
  </div>
</template>

<script>
  import formPackage from "./formPackage";
  export default {
    name: "useFormPackage",
    components:{
      formPackage
    },
    data() {
      return {
        dialogVisible:false,
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      }
    },
    methods:{
      show() {
        this.$refs.formPackage.toshow();
        console.log(321);
      },
      upBtn() {
        console.log('成功');
      }
    }
  }
</script>

<style scoped>

</style>
