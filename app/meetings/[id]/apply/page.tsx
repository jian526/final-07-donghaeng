export default function Apply() {
  return (
    <>
      <h1>모임 신청</h1>
      <div>
        <h3>질문 1</h3>
        <textarea name="질문 1" id="" style={{ backgroundColor: '#c2c2c2' }}></textarea>
      </div>
      <div>
        <h3>질문 2</h3>
        <textarea name="질문 2" id="" style={{ backgroundColor: '#c2c2c2' }}></textarea>
      </div>
      <div>
        <button>신청하기</button>
        <br />
        <button>취소하기</button>
      </div>
    </>
  );
}
