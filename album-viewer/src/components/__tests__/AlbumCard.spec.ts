import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AlbumCard from '../AlbumCard.vue'
import type { Album } from '../../types/album'

describe('AlbumCard', () => {
  const mockAlbum: Album = {
    id: 1,
    title: 'Test Album',
    artist: 'Test Artist',
    price: 9.99,
    image_url: 'https://example.com/test.jpg'
  }

  it('renders album information correctly', () => {
    const wrapper = mount(AlbumCard, {
      props: {
        album: mockAlbum
      }
    })

    expect(wrapper.text()).toContain('Test Album')
    expect(wrapper.text()).toContain('Test Artist')
    expect(wrapper.text()).toContain('$9.99')
  })

  it('displays the album image', () => {
    const wrapper = mount(AlbumCard, {
      props: {
        album: mockAlbum
      }
    })

    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe('https://example.com/test.jpg')
    expect(img.attributes('alt')).toBe('Test Album')
  })

  it('formats price to two decimal places', () => {
    const albumWithPrice: Album = {
      ...mockAlbum,
      price: 10.5
    }

    const wrapper = mount(AlbumCard, {
      props: {
        album: albumWithPrice
      }
    })

    expect(wrapper.text()).toContain('$10.50')
  })

  it('renders action buttons', () => {
    const wrapper = mount(AlbumCard, {
      props: {
        album: mockAlbum
      }
    })

    const buttons = wrapper.findAll('button')
    expect(buttons).toHaveLength(2)
    expect(buttons[0].text()).toBe('Add to Cart')
    expect(buttons[1].text()).toBe('Preview')
  })

  it('displays play overlay on hover', () => {
    const wrapper = mount(AlbumCard, {
      props: {
        album: mockAlbum
      }
    })

    const playOverlay = wrapper.find('.play-overlay')
    expect(playOverlay.exists()).toBe(true)
  })
})
