import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import $ from "jquery";

function Home() {
  useEffect(() => {
    var scrollDuration = 100;
    // paddles
    var leftPaddle = document.getElementsByClassName('left-paddle');
    var rightPaddle = document.getElementsByClassName('right-paddle');
    // get items dimensions
    var itemsLength = $('.grid-image-container').length;
    var itemSize = $('.grid-image-container').outerWidth(true);
    // get some relevant size for the paddle triggering point
    var paddleMargin = 20;

    // get wrapper width
    var getMenuWrapperSize = function () {
      return $('.image-grid').outerWidth();
    }
    var menuWrapperSize = getMenuWrapperSize();
    // the wrapper is responsive
    $(window).on('resize', function () {
      menuWrapperSize = getMenuWrapperSize();
    });
    // size of the visible part of the menu is equal as the wrapper size 
    var menuVisibleSize = menuWrapperSize;

    // get total width of all menu items
    var getMenuSize = function () {
      return itemsLength * itemSize;
    };
    var menuSize = getMenuSize();
    // get how much of menu is invisible
    var menuInvisibleSize = menuSize - menuWrapperSize;

    // get how much have we scrolled to the left
    var getMenuPosition = function () {
      return $('.image-grid-section').scrollLeft();
    };

    // finally, what happens when we are actually scrolling the menu
    $('.image-grid-section').on('scroll', function () {

      // get how much of menu is invisible
      menuInvisibleSize = menuSize - menuWrapperSize;
      // get how much have we scrolled so far
      var menuPosition = getMenuPosition();

      var menuEndOffset = menuInvisibleSize - paddleMargin;

      // show & hide the paddles 
      // depending on scroll position
      if (menuPosition <= paddleMargin) {
        $(leftPaddle).addClass('hidden');
        $(rightPaddle).removeClass('hidden');
      } else if (menuPosition < menuEndOffset) {
        // show both paddles in the middle
        $(leftPaddle).removeClass('hidden');
        $(rightPaddle).removeClass('hidden');
      } else if (menuPosition >= menuEndOffset) {
        $(leftPaddle).removeClass('hidden');
        $(rightPaddle).addClass('hidden');
      }

      // print important values
      $('#print-wrapper-size span').text(menuWrapperSize);
      $('#print-menu-size span').text(menuSize);
      $('#print-menu-invisible-size span').text(menuInvisibleSize);
      $('#print-menu-position span').text(menuPosition);

    });

    // scroll to left
    $(rightPaddle).on('click', function () {
      $('.image-grid-section').animate({
        scrollLeft: getMenuPosition() + 1220,
      }, scrollDuration, 'linear');
    });

    // scroll to right
    $(leftPaddle).on('click', function () {

      $('.image-grid-section').animate({
        scrollLeft: getMenuPosition() - 1220,
      }, scrollDuration, 'linear');
    });
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(8px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)', transition: { duration: 0.5 } }}
      exit={{ opacity: 0, filter: 'blur(8px)', transition: { duration: 0.7 } }}
    >
      <div className="container-fluid">
        <div className='intro-section'>
          <div className='intro-black-layer'>
            <div className='col-lg-2 col-md-1 col-sm-0'></div>
            <div className='intro-content col-lg-6 col-md-9 col-sm-12'>
              <p className='col-lg-12 col-md-12 col-sm-12'>Mana</p>
              <p className='col-lg-10 col-md-10 col-sm-12'>Comidas congeladas saudáveis. Já imaginou seus pratos favoritos saudáveis? Transformamos sua imaginação em realidade! Porque você merece comida de verdade.</p>
              <p className='col-lg-10 col-md-10 col-sm-12'>Acreditamos que a gastronomia saudável pode ser acessível a todos. Aceitamos todos os Cartões, Ticket Alelo, Sodexo e Ben Refeição.</p>
              <a href='https://anabombonatto.goomer.app/menu' target="_blank" rel="noopener noreferrer">Faça seu pedido</a>
            </div>
            <div className='col-lg-4 col-md-2 col-sm-0'></div>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='grid-controller left'>
          <div className='left-paddle'></div>
        </div>
        <div className='grid-controller right'>
          <div className='right-paddle'></div>
        </div>
        <div className='image-grid'>
          <div className='image-grid-section'>
            <div className='grid-image-container'>
              <div className='grid-image-one food-1'>
                <div className='grid-black-layer'>
                  <p>Picadinho bovino com arroz integral e farofa</p>
                  <p>
                    Carne bovina selecionada, refogada no tempero da casa, cozido ao molho da Chefe e finalizada com mix de legumes - batata,
                    cenoura e vagem. Acompanha uma generosa porção de arroz integral e farofa caseira crocante que da água na boca.
                  </p>
                </div>
              </div>
              <div className='d-flex'>
                <div className='grid-image-two food-11'>
                  <div className='grid-black-layer'>
                    <p>Picadinho bovino com arroz integral</p>
                  </div>
                </div>
                <div className='grid-image-three food-21'>
                  <div className='grid-black-layer'>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
            <div className='grid-image-container'>
              <div className='d-flex'>
                <div className='grid-image-two food-12'>
                  <div className='grid-black-layer'>
                    <p></p>
                  </div>
                </div>
                <div className='grid-image-three food-22'>
                  <div className='grid-black-layer'>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className='grid-image-one food-2'>
                <div className='grid-black-layer'>
                  <p></p>
                  <p></p>
                </div>
              </div>
            </div>
            <div className='grid-image-container'>
              <div className='grid-image-one food-3'>
                <div className='grid-black-layer'>
                  <p></p>
                  <p></p>
                </div>
              </div>
              <div className='d-flex'>
                <div className='grid-image-two food-13'>
                  <div className='grid-black-layer'>
                    <p></p>
                  </div>
                </div>
                <div className='grid-image-three food-23'>
                  <div className='grid-black-layer'>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
            <div className='grid-image-container'>
              <div className='d-flex'>
                <div className='grid-image-two food-14'>
                  <div className='grid-black-layer'>
                    <p></p>
                  </div>
                </div>
                <div className='grid-image-three food-24'>
                  <div className='grid-black-layer'>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className='grid-image-one food-4'>
                <div className='grid-black-layer'>
                  <p></p>
                  <p></p>
                </div>
              </div>
            </div>
            <div className='grid-image-container'>
              <div className='grid-image-one food-5'>
                <div className='grid-black-layer'>
                  <p></p>
                  <p></p>
                </div>
              </div>
              <div className='d-flex'>
                <div className='grid-image-two food-15'>
                  <div className='grid-black-layer'>
                    <p></p>
                  </div>
                </div>
                <div className='grid-image-three food-25'>
                  <div className='grid-black-layer'>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
            <div className='grid-image-container'>
              <div className='d-flex'>
                <div className='grid-image-two food-16'>
                  <div className='grid-black-layer'>
                    <p></p>
                  </div>
                </div>
                <div className='grid-image-three food-26'>
                  <div className='grid-black-layer'>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className='grid-image-one food-6'>
                <div className='grid-black-layer'>
                  <p></p>
                  <p></p>
                </div>
              </div>
            </div>
            <div className='grid-image-container'>
              <div className='grid-image-one food-7'>
                <div className='grid-black-layer'>
                  <p></p>
                  <p></p>
                </div>
              </div>
              <div className='d-flex'>
                <div className='grid-image-two food-17'>
                  <div className='grid-black-layer'>
                    <p></p>
                  </div>
                </div>
                <div className='grid-image-three food-27'>
                  <div className='grid-black-layer'>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className='timeline-section'>
          <div className='intro-black-layer'>
            <div className='timeline-content col-12'>
              <p>HORÁRIO</p>
              <p>
                <span>Pedidos realizados até as 11hs a entrega será em 2 dias úteis.</span>
                <span>Após às 11hs em 3 dias úteis.</span>
              </p>
              <p>Aberto todos os dias</p>
              <a href='https://anabombonatto.goomer.app/menu' target="_blank" rel="noopener noreferrer" className=''>Peça online</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className='helpdesk-section col-12'>
          <p className='col-12'>FALE CONOSCO</p>
          <p className='col-12'>Rua Califórnia, 776</p>
          <p className='col-12'>comercial@anabombonatto.com.br</p>
          <p className='col-12'>(11) 99877-3386</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
