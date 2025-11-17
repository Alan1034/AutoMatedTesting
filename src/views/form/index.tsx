
import { useState } from 'react';
import { RGeneralBasicForm, RBasicForm } from 'general-basic-form';
import { Button } from "@/components/ui/button"
import { text } from 'stream/consumers';
const Form = () => {
  const fieldClassName = 'col-start-2 col-span-4 mb-8';
  const formItem = [

    {
      label: "普通输入框",
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
    },
    {
      label: "复杂输入框",
      prop: "input-group",
      type: "input-group",
      setting: {
        placeholder: '请输入手机验证码',
        // style: 'width: 100%',
        addons: [
          {
            text: '前缀，一般和type: input 配合使用',
            align: "inline-start",
            render: (props) => {
              return (
                <div className="flex items-center">
                  <span>{props}</span>
                </div>
              );
            },
          },
          {
            text: '后缀，一般和type: input 配合使用',
            align: "inline-end"
          },
          // {
          //   text: '底部盒子，一般和type: 'textarea'配合使用',
          //   align: "block-end"
          // },
        ],
        // type: 'textarea',//input|textarea
      },
      fieldSetting: {
        className: fieldClassName,
      },
    },
    {
      label: '多维数组',
      prop: 'prices',
      type: 'form-list',
      description: [
        '段落1',
        '段落2',
      ],
      separator: "text", //文字分割线
      setting: {
        heading: true, //是否显示标题
        dim: 4, // 多维数组，注意要和columns的长度相等，输出为对象数组
        itemWidth: 'mean',//itemWidth: 'auto' | 'mean' 自动宽度（满行） | 平均分配宽度
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

          {
            label: '组合分类-多选',
            prop: 'expense_multiple_checkbox_test',
            type: 'combobox',
            setting: {
              placeholder: '请选择等级',
              type: 'checkbox-list',
            },
            fieldSetting: {
              className: fieldClassName,
            },
            option: [
              { label: 'Yysyayayasuydsaiewqnkerwjrklwjlwerjwlejrlj3', value: 'Y3' },
              { label: 'Yysyayayasuydsaiewqnkerwjrklwjlwerjwlejrlj4', value: 'Y4' },

            ],
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
      label: '1维数组',
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
      label: '选择框',
      type: 'select',
      option: [
        { label: 'Y3', value: 'Y3' },
        { label: 'Y4', value: 'Y4' },
        { label: 'Y5', value: 'Y5' },
      ],
      setting: {
        placeholder: '请选择等级',
        required: true,
      },
      fieldSetting: {
        className: fieldClassName,
      },
    },
    // {
    //   label: "创建时间",
    //   prop: "create_time",
    //   type: "date-picker",
    //   setting: {
    //     "range-separator": "至",
    //   },
    //   fieldSetting: {
    //     className: fieldClassName,
    //   },
    // },

    // {
    //   label: '是否必填',
    //   prop: 'is_optional',
    //   type: 'radio',
    //   setting: {
    //     disabled: true
    //   },
    //   option: [
    //     { value: '是', label: 'true', border: true },
    //     { value: '否', label: 'false' }
    //   ],
    //   fieldSetting: {
    //     className: fieldClassName,
    //   },
    //   rules: [
    //     {
    //       required: true,
    //       message: '请输入标签项名称',
    //       trigger: 'blur'
    //     }
    //   ]
    // },
    {
      prop: 'level',
      label: '多选列表',
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
      label: '选择框',
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
      label: '组合分类-多选',
      prop: 'expense_multiple_checkbox',
      type: 'combobox',
      setting: {
        placeholder: '请选择等级',
        type: 'checkbox-list',
      },
      fieldSetting: {
        className: fieldClassName,
      },
      option: [
        { label: 'Y3', value: 'Y3' },
        { label: 'Y4', value: 'Y4' },
        { label: 'Y5', value: 'Y5' },
      ],
    },
    {
      label: '组合分类',
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
          {JSON.stringify(formData)}
        </div>

      </div>
    </div>

  )
}

export default Form;