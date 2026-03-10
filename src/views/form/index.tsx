
import { useState, useRef } from 'react';
import { RGeneralBasicForm, RBasicForm, RBaseCombobox, RBaseDatePicker, RGeneralBasic } from 'general-basic-form';
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
        // type: 'number',
        // min: 1,
        // max: 100,
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
      label: "文本区域",
      prop: "Textarea",
      type: "textarea",
      setting: {
        placeholder: '请输入文本区域',
      },
      fieldSetting: {
        className: fieldClassName,
      }
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
      label: '',
      prop: 'description',
      type: 'description',
      fieldSetting: {
        className: fieldClassName,
      },
      description: [
        'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
        '段落2',
        'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      ],
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
        dim: 5, // 多维数组，注意要和columns的长度相等，输出为对象数组
        itemWidth: 'mean',//itemWidth: 'auto' | 'mean' 自动宽度（满行） | 平均分配宽度
        onChange: (value) => {
          console.log(value);
          setDetail({ ...detail, prices: value })
        },
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
            options: [
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
            label: '组合分类',
            prop: 'expense_category_id',
            type: 'combobox',
            setting: {
              placeholder: '请输入分类',
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
          {
            label: '组合分类-多选',
            prop: 'expense_multiple_checkbox_test',
            type: 'combobox',
            setting: {
              placeholder: '请选择等级',
              type: 'checkbox-list',
            },
            options: [
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
            if (!value) {
              callback();
              return;
            }
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
            if (!value) {
              callback();
              return;
            }
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
      options: [
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
    {
      label: "开关",
      prop: "switch_test",
      type: "switch",
      setting: {
      },
      fieldSetting: {
        className: 'col-start-2 col-span-2 mb-8',
      },
    },
    {
      label: "创建时间",
      prop: "create_time",
      type: "date-picker",
      setting: {
        placeholder: '请选择创建时间',
        // timeZone: "Asia/Shanghai",
        // locale: ,
      },
      dataPickerType: "month",//day|month
      fieldSetting: {
        className: fieldClassName,
      },
      // rules: [
      //   {
      //     message: "请输入信息",
      //     required: true,
      //   }
      // ],
    },

    // {
    //   label: '是否必填',
    //   prop: 'is_optional',
    //   type: 'radio',
    //   setting: {
    //     disabled: true
    //   },
    //   options: [
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
      options: [
        { label: 'Y3', value: 'Y3' },
        { label: 'Y4', value: 'Y4' },
        { label: 'Y5', value: 'Y5' },
      ],
      fieldSetting: {
        className: 'col-start-2 col-span-2 mb-8',
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
        className: 'col-start-4 col-span-2 mb-8',
      },
      setting: {
        placeholder: '请选择套餐',
      },
    },
    {
      prop: 'a-tree-select',
      label: '树选择',
      type: 'a-tree-select',
      fieldSetting: {
        className: 'col-start-4 col-span-2 mb-8',
      },
      setting: {
        placeholder: '请选择套餐',
        treeCheckable: true,
      },
      options: [
        {
          title: 'Node1',
          value: '0-0',
          key: '0-0',
          children: [
            {
              title: 'Child Node1',
              value: '0-0-0',
              key: '0-0-0',
            },
          ],
        },
        {
          title: 'Node2',
          value: '0-1',
          key: '0-1',
          children: [
            {
              title: 'Child Node3',
              value: '0-1-0',
              key: '0-1-0',
            },
            {
              title: 'Child Node4',
              value: '0-1-1',
              key: '0-1-1',
            }
          ],
        },
      ]
    },
    //  enum ComTypes {
    //     "command" = "command",
    //     "rc-tree" = "rc-tree",
    //     "ant-tree" = "ant-tree",
    //     "checkbox-list" = "checkbox-list",
    //   }

    // enum ContainerTypes {
    //   "Combobox" = "Combobox",
    //   "Popover" = "Popover",
    //   "Drawer" = "Drawer",
    //   "Dialog" = "Dialog",
    //   "HoverCard" = "HoverCard",
    // }
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
      options: [
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

        },
      ],
    },
    {
      label: '树形选择',
      prop: 'select_tree',
      type: 'combobox',
      setting: {
        placeholder: '请输入分类',
        empty: '搜索内容为空的提示',
        type: 'ant-tree',
        width: `300px`,//控制组件宽度
        // checkable: true,
        // selectable: false
      },
      container: "Dialog",
      fieldSetting: {
        className: fieldClassName,
      },
      options: [
        {
          label: '指南',
          value: '指南',
          children: [
            {
              value: 'shejiyuanze',
              label: '设计原则',
              setting: {
                icon: () => {
                  return <div>ID</div>
                }
              },
              children: [
                {
                  value: 'leaf',
                  label: '叶子节点',
                  shortcut: 'ctrl+z', //选项右侧的内容
                },
                {
                  value: 'leaf1',
                  label: '叶子节点1',
                  shortcut: 'ctrl+z', //选项右侧的内容
                },
              ],
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
  const [detail, setDetail] = useState({})
  const RGeneralBasicFormRef = useRef(null);
  const RBaseComboboxRef = useRef(null);
  const getList = (params) => {
    console.log('queryParams', RBaseComboboxRef.current.queryParams);
    console.log('formAction', RBaseComboboxRef.current.formAction());
    setFormData(params)
  }
  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-1/2 flex flex-col gap-3 p-8">
        <RGeneralBasicForm
          formItem={formItem}
          ref={RGeneralBasicFormRef}
          getList={getList}
          parametersType="data"
          noInputBlank
          formData={detail}
          fieldGroupSetting={{ className: 'grid grid-cols-5 gap-4' }}
        > </RGeneralBasicForm>
        <RBaseCombobox
          onFormChange={(params) => {
            console.log('queryParams', params);
          }}
          ref={RBaseComboboxRef}
          value='resource'
          item={{
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

              },
            ],
            setting: {
              placeholder: '请输入分类',
              empty: '搜索内容为空的提示',
            },
            container: 'Dialog',
            showClear: true,
          }}
        />
        <RBaseCombobox
          onFormChange={(params) => {
            console.log('queryParams', params);
          }}
          ref={RBaseComboboxRef}
          // value='resource'
          item={{
            options: [
              {
                label: '指南',
                value: '指南',
                separator: true, //分割线
                children: [
                  {
                    value: 'shejiyuanze',
                    label: '设计原则',
                  },
                ],
              },
              {
                label: '资源',
                value: 'resource',

              },
            ],
            setting: {
              placeholder: '请输入分类',
              empty: '搜索内容为空的提示',
            },
            container: 'Combobox',
          }}
        />
        <RBaseDatePicker
          onFormChange={(params) => {
            console.log('queryParams', params);
          }}
          // ref={RBaseComboboxRef}
          value={new Date()}
          item={{
            setting: {
              placeholder: '请选择创建时间',
            },
            dataPickerType: "day",//day|month
          }}
        />
        <RGeneralBasic
          onFormChange={(params) => {
            console.log('queryParams', params);
          }}
          item={{
            type: 'a-select',
            options: [
              { label: '到家服务', value: 'home_service' },
              { label: '医院陪护', value: 'hospital_care' },
            ],
            setting: {
              placeholder: '请输入分类',
              empty: '搜索内容为空的提示',
              className: 'w-full',

              // labelInValue: true, 
            },
          }}
        ></RGeneralBasic>
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