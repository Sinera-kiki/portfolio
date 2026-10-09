import { onMounted, onUnmounted } from 'vue'

/**
 * 轻量滚动进入动画：给所有 [data-reveal] 元素在进入视口时加 .is-revealed。
 * 不用第三方库，纯 IntersectionObserver。
 */
export function useReveal() {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    // 减少动效偏好用户直接放行
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
        el.classList.add('is-revealed')
      })
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
      observer?.observe(el)
    })
  })

  onUnmounted(() => {
    observer?.disconnect()
    observer = null
  })
}
