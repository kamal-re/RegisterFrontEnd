import 'antd/dist/antd.css';
import { Form, Input, Button, Row, Col } from 'antd';
import axios from 'axios'
//import { PlusCircleOutlined } from '@ant-design/icons';
import { Link,useParams } from 'react-router-dom';
//const { Column, ColumnGroup } = Table;
import {useState,useEffect} from "react"
const layout = {
  labelCol: {
    span: 4
  },
  wrapperCol: {
    span: 14
  }
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
};

export const Coach_form = () =>{

    const [form] = Form.useForm();
    //const history = useHistory();
    const params = useParams('coachId');
  const [user, setUser] = useState('');
  const [qualification, setQualification] = useState('');
  const [coach_blog, setCB] = useState('');
  const [coach_desc, setCD] = useState('');
  const [Items] = useState([]);

  const onFinish = () => {
    alert(Items);
    axios.post('http://localhost:3200/coach' ,{
      user: user,
      qualification: qualification,
      coach_blog: coach_blog,
      coach_desc: coach_desc,
    headers: {'Content-Type': 'multipart/form-data'}}
      
    )
    .then(function (AxiosResponse){
      console.log(AxiosResponse);
    })
    .catch(function (AxiosResponse){
      console.log(AxiosResponse);
    });
  };
  useEffect(()=>{
    form.setFieldsValue({
      user:params.user,
      qualification:params.qualification,
      coach_blog:params.coach_blog,
      coach_desc:params.coach_desc
  })
    console.log(params);
  },[params,form]);
    return(
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
	   <Col xs={12} sm={12} md={12}>
	<Form.Item>
              <Link to={'/'} className="nav-link">Back</Link>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      </>
    )
}