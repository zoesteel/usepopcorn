export default function MovieDetails({selectedId, onCloseMovie}) {
  return (
    <div className="detail">
    <button className="btn-back" onClick={onCloseMovie}></button>
    {selectedId}
    </div>
  )
}