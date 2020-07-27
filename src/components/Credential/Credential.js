import React from 'react'
import QrCode from './components/QrCode'
import Desc from './components/Credential'
// import {connect} from 'react-redux'
// import './Credential.css'

function Credential(props) {

  let credentials = props.data.courses.map((course, i)=>{
    return (
      <article className="credential-cont" key={i}>
        <div className="credential-wrapper">
          <QrCode certLink={course.certLink} qrCode={course.qrCode}/>
          <Desc 
            name={course.name}
            school={course.school}
            taken={course.taken}
            date={course.date}/>
        </div>
      </article>
    )
  })

  return (
    <div className="credential-container">
      {credentials}

      <style jsx>{`
        .credential-container {
          width: 100%;
          min-height: 800px;
          margin: 60px 0 120px 0;
        }

        .credential-cont {
          width: 750px;
          height: 320px;
          margin: 0 auto;
          margin-bottom: 35px;
          background: linear-gradient(89.78deg, #D3E6E5 0.07%, #AEC7C6 103.81%);
          padding-top: 30px;
          border-radius: 16px;
          box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
        }

        .credential-wrapper {
          width: calc(100% - 60px);
          height: calc(100% - 30px);
          margin: 0 30px 30px 30px;
        }

        .credential-desc {
          width: 470px;
          height: 100%;
          float: left;
          align-items: flex-start;
          justify-content: space-between;
        }

        .credential-qr {
          width: 220px;
          height: 100%;
          float: right;
        }

        .through {
          margin-bottom: 0px;
        }

        .through span {
          color: #808080;
          font-weight: 200;
          font-size: 0.95em;
        }

        .date {
          margin-bottom: 0px;
        }

        .date span {
          color: #5E747E;
          font-weight: 200;
        }

        .cd {
          line-height: 1.2em;
        }

        .credential-qr img{
          width: 150px;
          border-radius: 8px;
          box-shadow: 3px 3px 3px gray;
        }
        .credential-qr span {
          display: block;
          margin-top: 5px;
          font-size: 0.88em;
          text-align: center;
          color: #626262;
          font-weight: 400;
        } 

        .credential-qr .runner {
          left: 0;
        }

        .credential-qr a:hover {
          opacity: 0.8;
          filter: brightness(0.9);
          transition: all 0.3s ease-in-out;
        }

        .credential-desc .sub-reveal-container {
          margin-top: 0;
        }

        @media (max-width: 1368px) {
        .credential-cont {
          width: 680px;
        }
        .credential-desc {
          width: 435px;
        }
        .credential-qr {
          width: 185px;
        }
        .credential-qr img {
          width: 130px;
        }
        }

        @media (max-width: 1068px) {
          .credential-cont {
            width: 620px;
          }
          .credential-desc {
            width: 400px;
          }
          .credential-qr {
            width: 160px;
          }
        }

        @media (max-width: 868px) {
          .credential-cont {
            width: 70%;
            height: 520px;
            padding-top: 20px;
          }
          .credential-wrapper {
            width: calc(100% - 40px);
            height: calc(100% - 20px);
            margin: 0 20px 20px 20px;
          }

          .credential-desc {
            margin-top: 20px;
            width: 100%;
            height: 260px;
          }
          .credential-qr {
            width: 100%;
            height: 200px;
          }
          .credential-qr img {
            width: 150px;
          }
        }

        @media (max-width: 568px) {
          .credential-cont {
            width: 85%;
            border-radius: 8px;
          }
        }


        @media (max-width: 468px) {
          .credential-cont {
            width: 92%;
            height: 520px;
            padding-top: 15px;
          }
          .credential-wrapper {
            width: calc(100% - 30px);
            height: calc(100% - 15px);
            margin: 0 15px 15px 15px;
          }
          .credential-desc {
            height: 280px;
          }
        }
      `}</style>
    </div>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     pageData: state.state.pageData
//   }
// }

// export default connect(mapStateToProps)(Credential)
export default Credential
