class MYHeader extends HTMLElement {
    connectedCallback(){
      this.innerHTML = 
      `   <nav >
      <ul type="none"  >
          <li>Follow us on social media</li>
          <li><i class="fa-brands fa-facebook"></i></li>
          <li><i class="fa-brands fa-twitter"></i></li>
          <li><i class="fa-brands fa-instagram"></i></li>
          <li><i class="fa-brands fa-youtube"></i></li>
          <li><i class="fa-brands fa-linkedin-in"></i></li>
          <li>
              <select name="" id="">
                  <option value="English">English</option>
              </select>
          </li>
      </ul>
  
      <ul type="none">
          <li>privacy policy</li>
          <li>Disclaimer</li>
          <li>Contact</li>
          <li><a class="ask-logo" href="https://www.askapollo.com/" target="_blank" title="Apollo Ask Logo"><img src="https://cdn.apollohospitals.com/dev-apollohospitals/assets/images/logo-header-ask.jpg" width="65" height="32" alt="Apollo Ask Logo"></a></li>
      </ul>
      </nav>
      <div class="second-layer">
          
          <div>
              <img src="https://cdn.apollohospitals.com/dev-apollohospitals/2021/06/AH_logo_v-60c8405cbca3d.svg" alt="" width="110" height="92">
          </div>
          <div class="srch-box">
             <input type="text" height="1vh" placeholder="Search.." />
          </div>
          <div class="flex">
             <div><img src="https://cdn.apollohospitals.com/dev-apollohospitals/assets/images/certify-award.jpg" alt="award" width="142"></div>
             <div>
  
              <div class="outside-box">
                <a class="wider-box" href="tel:1066" title="Emergency">Emergency:  &nbsp;<span>  1066</span></a>	
                  <span ><img src="https://cdn.apollohospitals.com/dev-apollohospitals/assets/images/icons/24by7.png" alt="24/7" width="42" height="30"></span>
                <a class="wider-box" href="tel:1860-500-1066" title="Apollo Lifeline">Apollo lifeline:  &nbsp;<span>1860-500-1066</span></a>
                
             </div>
  
             </div>
          </div>
      </div>
      
      
      <hr>
      <div class="navbar flex">
      <div> <a href="index.html"><b>Home</b></a></div>
      <div> <a href="patientcare.html"><b>Patient Care</b></a></div>
      <div> <a href="CentresofExcellence.html"><b>Centres of Excellence</b></a>        </div>
      <div> <a href="Academics&Research.html"><b>Academics & Research</b></a>          </div>
      <div> <a href="Hospitals.html"><b>Hospitals</b></a>                 </div>
      <div> <a href="Contackus.html"><b>Contack us </b></a>             </div>
      <div> <a href="Corporate.html"><b>About Us</b>  </a>             </div>
     </div>
     <hr>
     `
    }
}customElements.define('my-hdr',MYHeader)

class Footer extends HTMLElement{
  connectedCallback(){
    this.innerHTML = 
    `<footer>
    <div class="flex ">
        <div>
            <ul type="none" class="social"  >
            <li>Follow us on social media</li>
            <li><i class="fa-brands fa-facebook"></i></li>
            <li><i class="fa-brands fa-twitter"></i></li>
            <li><i class="fa-brands fa-instagram"></i></li>
            <li><i class="fa-brands fa-youtube"></i></li>
            <li><i class="fa-brands fa-linkedin-in"></i></li>
            </ul>
        </div>
        <div>
            <ul type="none" class="social"  >
            <li>Privacy Policy</li>
            <li> Disclaimer</li>
            <li>Contact</li>
            <li>Sitemap</li>
            </ul>
        </div>
        <ul type="none" class="social" >
            <li>	&#169;2022 Apollo Hospitals Enterprise Ltd. All Rights Reserved.</li>
        </ul>
    </div>
    <br><br>
    <table width="100%" >
           
            <tr>
                <td>OUR STENTS PRICING</td>
                <td>TOTAL KNEE REPLACEMENT IMPLANTS PRICING</td>
                <td>TRANSPLANT DISCLAIMER</td>
            </tr>
            <tr>
                <td>RECRUITMENT DISCLAIMER</td>
                <td>COVID-19 RT-PCR TEST</td>

            </tr>
    </table>
</footer>`
  }
}customElements.define("footer-common",Footer)


