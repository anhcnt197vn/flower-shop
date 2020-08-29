export default function convertToVnd(price) {
  return (price).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})
}