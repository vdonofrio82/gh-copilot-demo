import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import App from '../App.vue'
import axios from 'axios'
import type { Album } from '../types/album'

vi.mock('axios')

describe('App', () => {
  const mockAlbums: Album[] = [
    {
      id: 1,
      title: 'Album 1',
      artist: 'Artist 1',
      price: 9.99,
      image_url: 'https://example.com/1.jpg'
    },
    {
      id: 2,
      title: 'Album 2',
      artist: 'Artist 2',
      price: 12.99,
      image_url: 'https://example.com/2.jpg'
    }
  ]

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the header', () => {
    vi.mocked(axios.get).mockResolvedValue({ data: [] })
    
    const wrapper = mount(App)
    
    expect(wrapper.text()).toContain('Album Collection')
    expect(wrapper.text()).toContain('Discover amazing music albums')
  })

  it('displays loading state initially', () => {
    vi.mocked(axios.get).mockImplementation(() => new Promise(() => {}))
    
    const wrapper = mount(App)
    
    expect(wrapper.text()).toContain('Loading albums...')
    expect(wrapper.find('.spinner').exists()).toBe(true)
  })

  it('fetches and displays albums on mount', async () => {
    vi.mocked(axios.get).mockResolvedValue({ data: mockAlbums })
    
    const wrapper = mount(App)
    await flushPromises()

    expect(axios.get).toHaveBeenCalledWith('/albums')
    expect(wrapper.text()).toContain('Album 1')
    expect(wrapper.text()).toContain('Album 2')
  })

  it('displays error message when fetch fails', async () => {
    vi.mocked(axios.get).mockRejectedValue(new Error('Network error'))
    
    const wrapper = mount(App)
    await flushPromises()

    expect(wrapper.text()).toContain('Failed to load albums')
    expect(wrapper.text()).toContain('Try Again')
  })

  it('retries fetching albums when Try Again button is clicked', async () => {
    vi.mocked(axios.get).mockRejectedValueOnce(new Error('Network error'))
    
    const wrapper = mount(App)
    await flushPromises()

    expect(wrapper.text()).toContain('Failed to load albums')

    vi.mocked(axios.get).mockResolvedValue({ data: mockAlbums })
    
    const retryButton = wrapper.find('.retry-btn')
    await retryButton.trigger('click')
    await flushPromises()

    expect(axios.get).toHaveBeenCalledTimes(2)
    expect(wrapper.text()).toContain('Album 1')
  })

  it('renders album cards when albums are loaded', async () => {
    vi.mocked(axios.get).mockResolvedValue({ data: mockAlbums })
    
    const wrapper = mount(App)
    await flushPromises()

    const albumCards = wrapper.findAll('[class*="album"]')
    expect(albumCards.length).toBeGreaterThan(0)
  })

  it('does not show loading or error when albums are successfully loaded', async () => {
    vi.mocked(axios.get).mockResolvedValue({ data: mockAlbums })
    
    const wrapper = mount(App)
    await flushPromises()

    expect(wrapper.find('.loading').exists()).toBe(false)
    expect(wrapper.find('.error').exists()).toBe(false)
    expect(wrapper.find('.albums-grid').exists()).toBe(true)
  })
})
