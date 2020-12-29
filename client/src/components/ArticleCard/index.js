import React from 'react'
import PropTypes from 'prop-types'

const ArticleCard = props => {
    return (
      <div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
        <div>
          <div class="w-full image-cover rounded-t-md">
            <div class="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl">
              <span class="text-base tracking-wide  font-bold border-b border-white font-sans">
                12
              </span>
              <span class="text-xs tracking-wide font-bold uppercase block font-sans">
                April
              </span>
            </div>
          </div>
          <div class="py-8 px-4 bg-white  rounded-b-md fd-cl">
            <span class="block text-lg text-gray-800 font-bold tracking-wide">
              Book a flight
            </span>
            <span class="block text-gray-600 text-sm">
              Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula.
              Donec bibendum faucibus purus eget cursus. Proin enim ante,
              scelerisque vel sem sit amet, ultrices mollis risus. Praesent
              justo felis, ullamcorper a cursus sed, condimentum at dui.
            </span>
          </div>
        </div>
      </div>
    );
}

ArticleCard.propTypes = {

}

export default ArticleCard