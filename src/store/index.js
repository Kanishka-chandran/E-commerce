import { createStore } from 'vuex'

export default createStore({
  state: {
    cartItems: []
  },
  mutations: {
    ADD_TO_CART(state, product) {
      const existingItem = state.cartItems.find(item => item.id === product.id)
      if (existingItem) {
        existingItem.quantity += product.quantity
      } else {
        state.cartItems.push({ ...product })
      }
    },
    UPDATE_CART_ITEM(state, { id, quantity }) {
      const item = state.cartItems.find(item => item.id === id)
      if (item) {
        if (quantity <= 0) {
          state.cartItems = state.cartItems.filter(item => item.id !== id)
        } else {
          item.quantity = quantity
        }
      }
    },
    REMOVE_FROM_CART(state, id) {
      state.cartItems = state.cartItems.filter(item => item.id !== id)
    },
    SET_CART(state, cartItems) {
      state.cartItems = cartItems
    }
  },
  actions: {
    addItemToCart({ commit }, product) {
      commit('ADD_TO_CART', product)
    },
    updateCartItem({ commit }, payload) {
      commit('UPDATE_CART_ITEM', payload)
    },
    removeFromCart({ commit }, id) {
      commit('REMOVE_FROM_CART', id)
    }
  },
  getters: {
    getCartItem: (state) => (productId) => {
      return state.cartItems.find(item => item.id === productId)
    },
    cartItems: (state) => state.cartItems,
    cartQuantity: (state) => {
      return state.cartItems.reduce((total, item) => total + item.quantity, 0)
    },
    subtotal: (state) => {
      return state.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    },
    shipping: (state) => {
      return state.cartItems.length > 0 ? 50 : 0
    },
    total: (state, getters) => {
      return getters.subtotal + getters.shipping
    }
  }
})