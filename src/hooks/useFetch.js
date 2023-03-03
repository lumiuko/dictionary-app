import nProgress from 'nprogress'

nProgress.configure({
  showSpinner: false
})

export default async function useFetch(url, dataSetter, loadingSetter, errorSetter) {
  try {
    nProgress.start()
    const res = await fetch(url)
    if (!res.ok) throw new Error(res.status)
    const data = await res.json()
    dataSetter(data)
    errorSetter(false)
  } catch (err) {
    errorSetter(true)
  } finally {
    loadingSetter(false)
    nProgress.done()
  }
}
