import React from 'react'
import Layout from '../components/Layout'
import img from '../components/homeimg.JPG'
import { useNavigate } from 'react-router-dom'
import { Row, Col } from 'antd'
 


const HomePage = () => {

    const navigate = useNavigate();
    const redirect = () => {
        navigate('/about')

    }
    return (
        <Layout>


            <Row justify='center' >

                <Col lg={22} sm={6} >
                    <div className='container'>

                        <div className='container-cards'  >
                            <div className='container-card'   >
                                <div className='container-card-ele' >
                                {/* <a href="/" className='logo'   >  <img src={pic} alt="" /></a> */}
                                <h1>ShareBay!!</h1>
                                    <h2>We are your Shared Mobility Partner</h2>
                                </div>

                                <div className='container-card-ele'   >
                                    ShareBay is an innovative effort to change the way people commute. We provide first of its kind Shared Mobility and Shared Micromobility of Electric Vehicles
                                </div>
                                <div   >
                                    
                                   <img src={img} className='homeimg' alt="" />
                                 
                                </div>
                                <div className='container-card-ele'    >
                                    Book your Dream Car to travel where you want !
                                </div>
                                <div className='container-card-ele'   >
                                    <button className='book-now' onClick={redirect}> Learn More </button>
                                </div>
                            </div>
                            <div>
                                
                            </div>
                        </div>
                    </div>
                    {/* middle section of page  */}
                    <div className='container'>
                        <div className='container-cards'  >
                            <div className='container-card'   >
                                <div>  <img src="https://images.unsplash.com/photo-1602918386084-58983c3bafac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" className='homeimages' /> </div>

                                <div className='container-card-ele'   >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam illo, fugit autem iusto culpa nobis! Nihil, assumenda. Dolores alias nesciunt quo error ratione placeat earum repellat dolorum, quidem fugit rerum?
                                </div>


                            </div>
                            <div className='container-card'   >
                                <div>  <img src="https://images.unsplash.com/photo-1602918386084-58983c3bafac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" className='homeimages' /> </div>

                                <div className='container-card-ele'   >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam illo, fugit autem iusto culpa nobis! Nihil, assumenda. Dolores alias nesciunt quo error ratione placeat earum repellat dolorum, quidem fugit rerum?
                                </div>


                            </div>
                            <div className='container-card'   >
                                <div>  <img src="https://images.unsplash.com/photo-1602918386084-58983c3bafac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" className='homeimages' /> </div>

                                <div className='container-card-ele'   >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam illo, fugit autem iusto culpa nobis! Nihil, assumenda. Dolores alias nesciunt quo error ratione placeat earum repellat dolorum, quidem fugit rerum?
                                </div>


                            </div>

                        </div>
                    </div>
                    {/* end section of the page */}
                    <div className='container'>
                        <div className='container-cards'  >
                            <div className='container-card'   >

                                <div className='container-card-ele'   >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam illo, fugit autem iusto culpa nobis! Nihil, assumenda. Dolores alias nesciunt quo error ratione placeat earum repellat dolorum, quidem fugit rerum?
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim facilis aliquam explicabo beatae natus veniam. Ex quam deserunt molestias accusamus ipsa quos quasi, sunt esse ipsum neque culpa commodi reprehenderit.
                                    Distinctio a id ratione odit dolore aspernatur, illum, placeat, voluptatibus vero debitis praesentium dolorum commodi ut ipsum vitae ex magnam consequatur amet quae et earum facere provident. Quas, aliquid recusandae!
                                </div>


                            </div>
                            <div className='container-card'   >

                                <div className='container-card-ele'   >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam illo, fugit autem iusto culpa nobis! Nihil, assumenda. Dolores alias nesciunt quo error ratione placeat earum repellat dolorum, quidem fugit rerum?
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aspernatur nostrum. Ex molestias corrupti in, ratione animi omnis autem eveniet tempora commodi aperiam laudantium libero recusandae voluptatibus est consequatur quos.
                                    Repellat cumque animi magni quidem incidunt provident recusandae atque, earum temporibus porro ipsum, voluptate mollitia, cupiditate iste! Ex in ducimus perferendis. Esse consectetur ea quo est distinctio necessitatibus, sint doloribus.
                                </div>


                            </div>


                        </div>
                    </div>
                </Col>


            </Row>

        </Layout>
    )
}

export default HomePage