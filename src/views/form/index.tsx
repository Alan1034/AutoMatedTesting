
import { useState } from 'react';
import { RGeneralBasicForm, RBasicForm } from 'general-basic-form';
import { Button } from "@/components/ui/button"
const Form = () => {
  const fieldClassName = 'col-start-2 col-span-4 mb-8';
  const formItem = [

    {
      label: "款式名称",
      prop: "bsName",
      type: "input",
      legend: '这是一个可选的标题',
      setting: {
        placeholder: '请输入手机验证码',
        // style: 'width: 100%',
        required: true,
      },
      fieldSetting: {
        className: fieldClassName,
      },
      rules: [
        {
          message: "请输入信息",
          required: true,
        },
        {
          pattern: /^\w+[\,\，\-\w' '#]+$/,
          message: "请输入正确的Invoice单号"
        },
        {
          validator: (rule, value, callback) => {
            callback();
          },
        },
      ],
      separator: true, //分割线

      //template: {
      //  suffix: () => {
      //    return <svg-icon icon-class="baifenbi" />;
      //  },
      //},
    },
    {
      label: '天数-价格配置',
      prop: 'prices',
      type: 'form-list',
      description: [
        '段落1',
        '段落2',
      ],
      separator: "text", //文字分割线
      setting: {
        heading: true, //是否显示标题
        dim: 3, // 多维数组，注意要和columns的长度相等，输出为对象数组
        columns: [
          {
            prop: 'id',
            label: '套餐ID',
            type: 'input',
            setting: {
              placeholder: '请输入套餐ID',
              disabled: true,
              className: 'hidden',
            },
          },
          {
            prop: 'days',
            label: '套餐名称',
            type: 'input',
            setting: {
              required: true,
              placeholder: '请输入套餐名称',
              type: 'number'
            },
          },
          {
            prop: 'serviceType',
            label: '服务类型',
            type: 'select',
            option: [
              { label: '到家服务', value: 'home_service' },
              { label: '医院陪护', value: 'hospital_care' },
            ],
            setting: {
              placeholder: '请选择服务类型',
              required: true,
              className: 'w-full',
            },
          },
        ],
      },
      fieldSetting: {
        className: fieldClassName,
      },
      rules: [
        {
          validator: (rule, value, callback) => {
            console.log(value);
            for (let i = 0; i < value.length; i++) {
              const element = value[i];
              if (!Number(element.days)) {
                callback(new Error('请输入数字'));
                return;
              }
            }
            callback();
          },
        },
      ],
      removeItemAction: (item, index) => {
        // 删除项会触发此函数
        console.log(item, index);
      },
    },
    {
      label: '护士在线增值服务内容',
      prop: 'nursingCare',
      type: 'form-list',
      setting: {
        placeholder: ['请输入服务内容'],
        required: true,
        dim: 1, // 1维数组，输出为字符串数组
      },
      fieldSetting: {
        className: fieldClassName,
      },
      rules: [
        {
          validator: (rule, value, callback) => {
            for (let i = 0; i < value.length; i++) {
              const element = value[i];
              if (!element) {
                callback(new Error('请输入服务内容'));
                return;
              }
            }
            callback();
          },
        },
      ],
    },
    {
      prop: 'level1',
      label: '等级',
      type: 'select',
      option: [
        { label: 'Y3', value: 'Y3' },
        { label: 'Y4', value: 'Y4' },
        { label: 'Y5', value: 'Y5' },
      ],
      setting: {
        placeholder: '请选择等级',
        required: true,
        multiple: true,
      },
      fieldSetting: {
        className: fieldClassName,
      },
    },
    {
      label: "创建时间",
      prop: "create_time",
      type: "date-picker",
      setting: {
        "range-separator": "至",
      },
      fieldSetting: {
        className: fieldClassName,
      },
    },

    {
      label: '是否必填',
      prop: 'is_optional',
      type: 'radio',
      setting: {
        disabled: true
      },
      option: [
        { value: '是', label: 'true', border: true },
        { value: '否', label: 'false' }
      ],
      fieldSetting: {
        className: fieldClassName,
      },
      rules: [
        {
          required: true,
          message: '请输入标签项名称',
          trigger: 'blur'
        }
      ]
    },
    {
      prop: 'level',
      label: '多选',
      legend: '标题',
      type: 'checkbox-list',
      gap: 3,
      option: [
        { label: 'Y3', value: 'Y3' },
        { label: 'Y4', value: 'Y4' },
        { label: 'Y5', value: 'Y5' },
      ],
      fieldSetting: {
        className: fieldClassName,
      },
      setting: {
        placeholder: '请选择等级',
      },
    },
    {
      prop: 'test1',
      label: 'test1(多选)',
      type: 'checkbox',
      fieldSetting: {
        className: fieldClassName,
      },
      setting: {
        placeholder: '请选择套餐',
      },
    },

    {
      label: "分类",
      prop: "分类",
      type: "command",
      setting: {
        placeholder: "请输入分类",
        empty: "搜索内容为空的提示",
      },
      fieldSetting: {
        className: fieldClassName,
      },
      options: [
        {
          label: "指南",
          value: "guide",
          separator: true, //分割线
          children: [
            {
              value: 'shejiyuanze',
              label: '设计原则',
              onSelect: (value) => {
                console.log('Selected', value);
              },
              shortcut: 'ctrl+z', //选项右侧的内容
            },

          ],
        },
        {
          label: "资源",
          value: "resource",
          children: [
            {
              value: "axure",
              label: "Axure Components",
            }
          ],
        },
      ],
    },
    {
      label: '分类',
      prop: 'expense_category_id',
      type: 'combobox',
      setting: {
        placeholder: '请输入分类',
        empty: '搜索内容为空的提示',
      },
      fieldSetting: {
        className: fieldClassName,
      },
      options: [
        {
          label: '指南',
          value: '指南',
          separator: true, //分割线
          children: [
            {
              value: 'shejiyuanze',
              label: '设计原则',
              shortcut: 'ctrl+z', //选项右侧的内容
            },
          ],
        },
        {
          label: '资源',
          value: 'resource',
          children: [
            {
              value: 'axure',
              label: 'Axure Components',
            },
          ],
        },
      ],
    },
  ]
  const [formData, setFormData] = useState({})
  const getList = (params) => {
    console.log('params', params);
    setFormData(params)
  }
  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-1/2">
        <RGeneralBasicForm
          formItem={formItem}
          getList={getList}
          parametersType="data"
          noInputBlank
          // formData={detail}
          fieldGroupSetting={{ className: 'grid grid-cols-5 gap-4' }}
        > </RGeneralBasicForm>
      </div>

      <div className="w-1/2">
        <div className="flex min-h-svh flex-col items-center justify-center">
          <Button  >Go to Form</Button>
          {JSON.stringify(formData)}
        </div>

      </div>
    </div>

  )
}

export default Form;