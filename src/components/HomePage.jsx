import React, {Component} from 'react';
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Upload,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
} from 'antd';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

class HomePages extends Component {

    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    normFile = e => {
        console.log('Evento que se subió:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    render() {

        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;


        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };

        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>,
        );



        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item label={
                    <span>
              Desarrollador&nbsp;
                        <Tooltip title="Empresa que construyó la casa.">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
                }
                >
                    {getFieldDecorator('desarrollador', {
                        rules: [
                            {
                                required: true,
                                message: 'Por favor inserte un desarrollador',
                            },
                        ],
                    })(<Input />)}
                </Form.Item>

                <Form.Item label="Precio">
                    {getFieldDecorator('precio', {
                        rules: [{ required: true, message: 'Por favor inserta un precio' }],
                    })(<Input type="number"/>)}
                </Form.Item>

                <Form.Item label="Ciudad">
                    {getFieldDecorator('ciudad', {
                        rules: [{ required: true, message: 'Por favor inserta una ciudad' }],
                    })(<Input/>)}
                </Form.Item>

                <Form.Item label="Estado">
                    {getFieldDecorator('estado', {
                        rules: [{ required: true, message: 'Por favor inserta un estado' }],
                    })(<Input/>)}
                </Form.Item>

                <Form.Item label="Fraccionamiento">
                    {getFieldDecorator('fraccionamieto', {
                        rules: [{ required: true, message: 'Por favor inserta un fraccionamiento' }],
                    })(<Input/>)}
                </Form.Item>

                <Form.Item label="Municipio">
                    {getFieldDecorator('municipio', {
                        rules: [{ required: true, message: 'Por favor inserta un municipio' }],
                    })(<Input/>)}
                </Form.Item>

                <Form.Item label="Colonia">
                    {getFieldDecorator('colonia', {
                        rules: [{ required: true, message: 'Por favor inserta una colonia' }],
                    })(<Input/>)}
                </Form.Item>

                <Form.Item label="Descripción">
                    {getFieldDecorator('descripcion', {
                        rules: [{ required: true, message: 'Por favor inserta una descripción' }],
                    })(<Input placeholder='Por favor inserta una descripción' />)}
                </Form.Item>

                <Form.Item label="Habitaciones">
                    {getFieldDecorator('habitaciones', {
                        rules: [{ required: true, message: 'Por favor inserta la cantidad de habitaciones' }],
                    })(<Input type="number"/>)}
                </Form.Item>

                <Form.Item label="Baños">
                    {getFieldDecorator('baños', {
                        rules: [{ required: true, message: 'Por favor inserta la cantidad de baños' }],
                    })(<Input type="number"/>)}
                </Form.Item>

                <Form.Item label="Área de contrucción">
                    {getFieldDecorator('areadeconstruc', {
                        rules: [{ required: true, message: 'Por favor inserta la cantidad m2 de construcción' }],
                    })(<Input type="number"/>)}
                </Form.Item>

                <Form.Item label="Área de terreno">
                    {getFieldDecorator('areadeterreno', {
                        rules: [{ required: true, message: 'Por favor inserta la cantidad m2 de terreno' }],
                    })(<Input type="number"/>)}
                </Form.Item>

                <Form.Item label="Imagen">
                    {getFieldDecorator('imagen', {
                        valuePropName: 'fileList',
                        getValueFromEvent: this.normFile,
                    })(
                        <Upload.Dragger name="files" action="/upload.do"> {/*aqui se selecciona a donde se sube la imagen*/}
                            <p className="ant-upload-drag-icon">
                                <Icon type="inbox" />
                            </p>
                            <p className="ant-upload-text">Haz clic aquí o arrastra la imagen para subirla.</p>
                            <p className="ant-upload-hint">Sube una o varias imágenes.</p>
                        </Upload.Dragger>,
                    )}
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>       );
    }
}

const HomePage = Form.create({ name: 'register' })(HomePages);

export default HomePage;
