import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Row, Col } from 'antd';
import axios from 'axios'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const layout = {
  labelCol: {
    span: 4
  },
  wrappercol: {
    span: 14
  }
};

const tailLayout = {
  wrappercol: {
    offset: 8,
    span: 16
  }
};

const Demo = () => {
  const [form] = Form.useForm();

  const [user, setUser] = useState('');
  const [qualification, setQualification] = useState('');
  const[address_set] = useState('');
  const [ line1, setLine1 ] =useState('');
  const [ line2, setLine2 ] = useState('');
  const [ city, setCity ] = useState('');
  const [ state, setState ] = useState('');
  const [ country, setCountry ] = useState('');
  const [ zip, setZip ] = useState('');
  const [coach_blog, setCB] = useState('');
  const [coach_desc, setCD] = useState('');
  const [Items] = useState({
    user,
    qualification,
    address_set,
    coach_blog,
    coach_desc
  })

  const onFinish = () => {
    alert(Items);
    axios.post('http://localhost:5000/coach', {
      user: user,
      qualification: qualification,
      address_set:[{
        line1,
        line2,
        city,
        state,
        country,
        zip
      }],
      coach_blog: coach_blog,
      coach_desc: coach_desc
    })
    .then(function (AxiosResponse){
      console.log(AxiosResponse);
    })
    .catch(function (AxiosResponse){
      console.log(AxiosResponse);
    });
  };


  return (
    <>
      <Form form={form} {...layout} 
        onFinish={onFinish} 
        autoComplete="on">
        <Row gutter={[16, 24]}>
          <Col xs={24} sm={24} md={12}>
            <Form.Item
              name="user"
              label="User"
              rules={[{ required: true, message: 'Enter User Id' }]}
            >
              <Input value={user} name="user" onChange={(e)=>{
                setUser(e.target.value)
              }}/>
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Form.Item
              name="qualification"
              label="Qualification"
              rules={[{ required: true, message: 'Enter Qualification' }]}
            >
              <Input value={qualification} name="qualification" onChange={(e)=>{
                setQualification(e.target.value)}}/>
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Form.Item label="Address_set">
              <Form.List name="address_set">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(field => (
                      <>
                        <Form.Item>
                          <Row gutter={[16, 24]}>
                            <Col xs={24} sm={24} md={12}>
                              <Form.Item
                                {...field}
                                name={[field.name, 'line1']}
                                rules={[
                                  { required: true, message: 'Missing Line1' }
                                ]}
                              >
                                <Input placeholder="line1" value={line1} onChange={(e)=>{
                                 setLine1(e.target.value)}}/>
                              </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={12}>
                              <Form.Item
                                {...field}
                                name={[field.name, 'line2']}
                                rules={[
                                  { required: true, message: 'Missing Line2' }
                                ]}
                              >
                                <Input placeholder="line2" value={line2} onChange={(e)=>{
                                setLine2(e.target.value)}}/>
                              </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={12}>
                              <Form.Item
                                {...field}
                                name={[field.name, 'city']}
                                rules={[
                                  { required: true, message: 'Missing City' }
                                ]}
                              >
                                <Input placeholder="city" value={city}onChange={(e)=>{
                                 setCity(e.target.value)}} />
                              </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={12}>
                              <Form.Item
                                {...field}
                                name={[field.name, 'state']}
                                rules={[
                                  { required: true, message: 'Missing State' }
                                ]}
                              >
                                <Input placeholder="state" value={state} onChange={(e)=>{
                              setState(e.target.value)}} />
                              </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={12}>
                              <Form.Item
                                {...field}
                                name={[field.name, 'country']}
                                rules={[
                                  { required: true, message: 'Missing country' }
                                ]}
                              >
                                <Input placeholder="country" value={country} onChange={(e)=>{
                                  setCountry(e.target.value)}}/>
                              </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={12}>
                              <Form.Item
                                {...field}
                                name={[field.name, 'zip']}
                                rules={[
                                  { required: true, message: 'Missing Zip' }
                                ]}
                              >
                                <Input placeholder="zip" value={zip} onChange={(e)=>{
                                  setZip(e.target.value)}}/>
                              </Form.Item>
                            </Col>
                          </Row>
                        </Form.Item>
                        <MinusCircleOutlined
                          onClick={() => remove(field.name)}
                        />
                      </>
                    ))}
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        block
                        icon={<PlusOutlined />}
                      >
                        Add Address
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12}>
            <Form.Item
              name="coach_blog"
              label="Coach_blog"
              rules={[{ required: true, message: 'Enter Coach_blog' }]}
            >
              <Input name="coach_blog"  value={coach_blog} onChange={(e)=>{
                setCB(e.target.value)}}/>
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Form.Item
              name="coach_desc"
              label="Coach_desc"
              rules={[{ required: true, message: 'Enter Coach_desc' }]}
            >
              <Input name="coach_desc"  value={coach_desc} onChange={(e)=>{
                setCD(e.target.value)}}/>
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24}>
            <Form.Item {...tailLayout}>
              <Button type="primary"  {...tailLayout} htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Demo;