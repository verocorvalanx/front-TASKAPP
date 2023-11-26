import { Button, Carousel } from "react-bootstrap"

const CarouselHome = () => {
    return (
        <>
            <Carousel>

                <Carousel.Item>
                    <img
                        className="d block w-100"
                        style={{ maxHeight: "900px", objectFit: "cover" }}
                        src="/assets/images/slide1.png" alt="slide1" />
                    <Carousel.Caption>
                        <h3>Somos el mejor equipo de Aplicaciones Ágiles</h3>
                        <p>Te brindamos todo el asesoramiento en Desarrollo de Software</p>
                        <Button>Explorar skills</Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d block w-100"
                        style={{ maxHeight: "900px", objectFit: "cover" }}
                        src="/assets/images/slide2.png" alt="slide2" />
                    <Carousel.Caption>
                        <h3>Los mejores expertos del país</h3>
                        <p>Trabajamos con las últimas tecnologías del Front y Back cada día</p>
                        <Button>Conocé más</Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d block w-100"
                        style={{ maxHeight: "900px", objectFit: "cover" }}
                        src="/assets/images/slide3.png" alt="slide3" />
                    <Carousel.Caption>
                        <h3>Potencia tu negocio con nuestras soluciones personalizadas</h3>
                        <p>Desarrollamos software a medida para satisfacer tus necesidades empresariales específicas</p>
                        <Button>Ver más soluciones</Button>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </>
    )
}

export default CarouselHome