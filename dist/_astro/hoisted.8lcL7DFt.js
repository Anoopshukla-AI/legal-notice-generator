const B=document.getElementById("dark-mode-toggle");B?.addEventListener("click",()=>{const e=document.documentElement,t=e.classList.contains("dark");e.classList.toggle("dark",!t),e.classList.toggle("light",t)});function p(e){return"₹"+e.toLocaleString("en-IN")+"/-"}function l(e){return new Date(e+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"})}function i(e){return!e||e.trim()===""?"[NOT PROVIDED]":e.trim()}const b=`─────────────────────────────────────────────────────────────────
IMPORTANT: This is a reference template only. Consult a registered
advocate before using this notice for any formal or legal purpose.
─────────────────────────────────────────────────────────────────`,D=`NOTE: Send this notice by Registered Post with Acknowledgment Due (RPAD)
for the strongest legal record in Indian courts.`;function F(e){const t=Math.max(1,Math.min(90,e.replyDeadlineDays));return`LEGAL NOTICE — RENT DEMAND
${l(e.date)}

TO,
${i(e.recipientName)}

FROM,
${i(e.senderName)}

SUBJECT: Legal Notice Demanding Payment of Outstanding Rent

Sir/Madam,

I, ${i(e.senderName)}, am the owner/landlord of the property situated at ${i(e.propertyAddress)} (hereinafter referred to as "the said premises").

You are the tenant in occupation of the said premises under an agreement of tenancy/leave and licence. As on the date of this notice, you are in arrears of rent amounting to ${p(e.amountDue)} (Rupees ${i(e.amountDue.toString())} only) in respect of the following period(s): ${i(e.monthsDue)}.

Despite repeated requests and reminders, you have failed and neglected to pay the said rent dues. Your continued non-payment constitutes a breach of the terms of tenancy and gives rise to my rights under the applicable State Rent Control Act and the Transfer of Property Act, 1882.

You are, therefore, hereby called upon to pay the entire outstanding amount of ${p(e.amountDue)} within ${t} (${i(t.toString())}) days from the date of receipt of this notice, failing which I shall be constrained to initiate appropriate legal proceedings against you for recovery of arrears of rent and for eviction from the said premises, at your cost and risk, without any further notice to you.

Please treat this communication as a formal legal notice.

Yours faithfully,

${i(e.senderName)}
Date: ${l(e.date)}

${D}

${b}`}function U(e){const t=Math.max(1,Math.min(90,e.replyDeadlineDays));return`DEMAND LETTER — MONEY RECOVERY
${l(e.date)}

TO,
${i(e.recipientName)}

FROM,
${i(e.senderName)}

SUBJECT: Demand for Recovery of Outstanding Dues

Dear Sir/Madam,

I, ${i(e.senderName)}, write this formal demand letter to call upon you to repay the sum lawfully due and payable to me.

You are indebted to me in the sum of ${p(e.amountClaimed)} (the "Outstanding Amount") on account of: ${i(e.reasonForDebt)}.

The said amount became due and payable on or before ${l(e.dateDue)}, and despite the lapse of sufficient time and repeated requests, you have failed to discharge your financial obligation.

This notice is issued calling upon you to pay the Outstanding Amount of ${p(e.amountClaimed)} in full to me within ${t} (${i(t.toString())}) days from the date of receipt of this notice.

Should you fail to make the said payment within the stipulated period, I shall be left with no alternative but to initiate appropriate civil and/or legal proceedings before the competent court or tribunal for recovery of the said dues together with interest and costs, entirely at your risk and expense.

Yours faithfully,

${i(e.senderName)}
Date: ${l(e.date)}

${D}

${b}`}function Y(e){const t=Math.max(1,Math.min(10,e.confidentialityYears));return`NON-DISCLOSURE AGREEMENT — CONFIDENTIALITY CLAUSE
Date: ${l(e.date)}
Parties: ${i(e.partyA)} ("Party A") and ${i(e.partyB)} ("Party B")

This Mutual Non-Disclosure Agreement Clause ("Agreement") is entered into as of ${l(e.date)} between ${i(e.partyA)} ("Party A") and ${i(e.partyB)} ("Party B"), collectively referred to as "the Parties."

1. DEFINITION OF CONFIDENTIAL INFORMATION
   "Confidential Information" means any information, technical data, trade secrets, know-how, business plans, financial information, customer lists, or other information disclosed by either Party to the other, either directly or indirectly, in writing, orally, or by any other means, that is designated as confidential or that reasonably should be understood to be confidential given the nature of the information and the circumstances of disclosure.

2. OBLIGATIONS OF NON-DISCLOSURE
   Each Party agrees to: (a) hold the other Party's Confidential Information in strict confidence; (b) not to disclose such information to any third party without the prior written consent of the disclosing Party; (c) use the Confidential Information solely for the purpose of evaluating or advancing the mutual business relationship between the Parties; and (d) limit access to Confidential Information to its employees, agents, or advisors who have a genuine need-to-know and who are bound by confidentiality obligations at least as protective as those set forth herein.

3. EXCLUSIONS
   The obligations under this Agreement shall not apply to information that: (a) is or becomes publicly available through no breach by the receiving Party; (b) was already known to the receiving Party without restriction before disclosure; (c) is independently developed by the receiving Party without use of the Confidential Information; or (d) is required to be disclosed by applicable law, regulation, or court order, provided that the receiving Party gives the disclosing Party prompt prior written notice and cooperates in seeking a protective order.

4. TERM
   The confidentiality obligations imposed by this Agreement shall remain in full force and effect for a period of ${t} (${i(t.toString())}) year${t===1?"":"s"} from the date of this Agreement, unless earlier terminated by mutual written agreement of the Parties.

5. GOVERNING LAW AND JURISDICTION
   This Agreement shall be governed by and construed in accordance with the laws of ${i(e.jurisdiction)}. Any disputes arising out of or in connection with this Agreement shall be subject to the exclusive jurisdiction of the courts at ${i(e.jurisdiction)}.

NOTE: This is a mutual NDA clause — it binds both Parties equally. For a
one-sided (unilateral) NDA where only one party discloses, specify the
disclosing party clearly with the assistance of your legal counsel.

${b}`}function G(e){return`LEGAL NOTICE — EVICTION
${l(e.date)}

TO,
${i(e.recipientName)}

FROM,
${i(e.senderName)}

SUBJECT: Legal Notice for Vacation of Premises / Eviction

Sir/Madam,

I, ${i(e.senderName)}, am the owner/landlord of the premises situated at ${i(e.propertyAddress)} (hereinafter referred to as "the said premises").

You are presently in occupation of the said premises as a tenant/licensee. I hereby call upon you to vacate and deliver peaceful possession of the said premises on the following ground(s): ${i(e.evictionReason)}.

You are hereby required to vacate the said premises, remove all your belongings, and deliver peaceful and vacant possession thereof to me on or before ${l(e.vacateByDate)}.

Should you fail to vacate the said premises on or before the aforesaid date, I shall be constrained to initiate appropriate legal proceedings under the applicable State Rent Control Act and/or the Transfer of Property Act, 1882 for your eviction, recovery of mesne profits, and damages, entirely at your cost and risk.

Please treat this as final notice. No further reminder will be issued.

Yours faithfully,

${i(e.senderName)}
Date: ${l(e.date)}

${D}

${b}`}function j(e){const t=e.noticePay!==void 0&&e.noticePay>0?`
In lieu of the notice period, you will be paid notice pay amounting to ${p(e.noticePay)} (Rupees ${e.noticePay.toLocaleString("en-IN")} only) along with your full and final settlement.`:"";return`EMPLOYMENT TERMINATION NOTICE
${l(e.date)}

TO,
${i(e.recipientName)}
Designation: ${i(e.employeeDesignation)}

FROM,
${i(e.senderName)}

SUBJECT: Notice of Termination of Employment

Dear ${i(e.recipientName)},

This letter serves as formal notice that your employment with ${i(e.senderName)} in the capacity of ${i(e.employeeDesignation)} is terminated with effect from ${l(e.lastWorkingDay)}.

The reason(s) for this termination are as follows: ${i(e.terminationReason)}.

Your last working day with the organisation shall be ${l(e.lastWorkingDay)}.${t}

You are requested to: (a) complete all pending handover formalities and documentation before your last working day; (b) return all company property, access cards, equipment, and confidential documents; and (c) ensure proper knowledge transfer to your designated successor or manager.

Your final settlement, including payment of all lawfully due dues, shall be processed in accordance with the applicable provisions of the Industrial Disputes Act, 1947 and the Payment of Wages Act, 1936 (as applicable).

This termination does not affect any post-employment obligations, including obligations of confidentiality and non-solicitation, if any, under your employment agreement.

Yours faithfully,

${i(e.senderName)}
Date: ${l(e.date)}

${b}`}function V(e){return`LEGAL NOTICE — CHEQUE DISHONOUR (SECTION 138, NEGOTIABLE INSTRUMENTS ACT, 1881)
${l(e.date)}

TO,
${i(e.recipientName)}

FROM,
${i(e.senderName)}

SUBJECT: Legal Notice Under Section 138 of the Negotiable Instruments Act, 1881
         for Dishonour of Cheque No. ${i(e.chequeNumber)}

Sir/Madam,

I, ${i(e.senderName)}, am writing to serve upon you this statutory legal notice under Section 138 of the Negotiable Instruments Act, 1881 ("the Act").

FACTUAL BACKGROUND:
You had issued Cheque No. ${i(e.chequeNumber)} dated ${l(e.date)} drawn on ${i(e.bankNameBranch)}, for a sum of ${p(e.chequeAmount)} (Rupees ${i(e.chequeAmount.toString())} only), in discharge of a legally enforceable liability/debt owed to me.

Upon presentation of the aforesaid cheque through banking channels, the said cheque was returned unpaid/dishonoured on ${l(e.dishonourDate)} by the drawee bank on grounds of "insufficient funds" / technical dishonour, as evidenced by the bank dishonour memo.

STATUTORY NOTICE:
Under Section 138 of the Negotiable Instruments Act, 1881, you are hereby called upon to pay the entire cheque amount of ${p(e.chequeAmount)} to me within 15 (fifteen) days from the date of receipt of this notice.

CONSEQUENCE OF NON-PAYMENT:
Failure to make the said payment within the stipulated 15-day period will render you liable for prosecution under Section 138 of the Negotiable Instruments Act, 1881, which is a cognisable offence punishable with imprisonment for a term which may extend to two years, or with a fine which may extend to twice the amount of the cheque, or with both.

STATUTORY CAUTION: Section 138 of the NI Act requires this legal notice to be
sent within 30 days of the bank dishonour memo date. Verify your bank memo
date to ensure compliance with this mandatory limitation period. This tool
cannot enforce that deadline — you must calculate this independently.

Yours faithfully,

${i(e.senderName)}
Date: ${l(e.date)}

${D}

${b}`}window.__LNG_TEMPLATES={generateRentDemand:F,generateMoneyRecovery:U,generateNDAClause:Y,generateEviction:G,generateEmploymentTermination:j,generateChequeDishonour:V};const k={"rent-demand":[{id:"property-address",name:"propertyAddress",type:"text",label:"Property address",required:!0,placeholder:"e.g. Flat 4B, Sunshine Apartments, MG Road, Bengaluru 560001",hint:"The full address of the rented property. This identifies the premises in dispute."},{id:"amount-due",name:"amountDue",type:"number",label:"Amount due (₹)",required:!0,min:1,placeholder:"e.g. 25000",hint:"Total rent arrears as on today. Must be greater than zero."},{id:"months-due",name:"monthsDue",type:"text",label:"Months for which rent is due",required:!0,placeholder:"e.g. January 2025 to April 2025",hint:"Specify the period clearly — courts require this to calculate the amount and assess limitation."},{id:"reply-deadline",name:"replyDeadlineDays",type:"number",label:"Reply deadline (days)",required:!0,min:1,max:90,placeholder:"15",hint:"Time given to the recipient to pay before legal action. Typically 15–30 days."}],"money-recovery":[{id:"amount-claimed",name:"amountClaimed",type:"number",label:"Amount claimed (₹)",required:!0,min:1,placeholder:"e.g. 50000",hint:"Total amount owed to you. Must be greater than zero."},{id:"reason-for-debt",name:"reasonForDebt",type:"text",label:"Reason for debt",required:!0,placeholder:"e.g. Unpaid loan advanced on 1 January 2025",hint:"The legal basis for the claim. Be specific — vague reasons weaken the notice."},{id:"date-due",name:"dateDue",type:"date",label:"Date amount became due",required:!0,hint:"The date from which the amount was payable. Relevant for limitation and interest calculation."},{id:"money-reply-deadline",name:"replyDeadlineDays",type:"number",label:"Reply deadline (days)",required:!0,min:1,max:90,placeholder:"15",hint:"Time given to the recipient to repay before you file a suit."}],"nda-clause":[{id:"party-a",name:"partyA",type:"text",label:"Party A name",required:!0,placeholder:"e.g. TechCorp Solutions Pvt. Ltd.",hint:"Full legal name of the first party. Both parties are bound equally in a mutual NDA."},{id:"party-b",name:"partyB",type:"text",label:"Party B name",required:!0,placeholder:"e.g. Anika Mehta",hint:"Full legal name of the second party."},{id:"confidentiality-years",name:"confidentialityYears",type:"number",label:"Confidentiality period (years)",required:!0,min:1,max:10,placeholder:"2",hint:"How long the NDA remains in force. Standard commercial NDAs run 2–5 years. Maximum 10 years."},{id:"jurisdiction",name:"jurisdiction",type:"text",label:"Governing law / jurisdiction",required:!0,placeholder:"e.g. Delhi, India",hint:"Which city or state courts have jurisdiction over disputes. Must match where you or the contract is based."}],eviction:[{id:"eviction-property",name:"propertyAddress",type:"text",label:"Property address",required:!0,placeholder:"e.g. Shop No. 3, Ground Floor, Commerce House, Pune 411001",hint:"Complete address of the premises to be vacated."},{id:"eviction-reason",name:"evictionReason",type:"text",label:"Reason for eviction",required:!0,placeholder:"e.g. Non-payment of rent for 4 months / expiry of tenancy period",hint:"Legal ground for eviction. Must correspond to grounds recognised under your State Rent Control Act."},{id:"vacate-by-date",name:"vacateByDate",type:"date",label:"Vacate by date",required:!0,hint:"The date by which the tenant must hand over vacant possession."}],"employment-termination":[{id:"employee-designation",name:"employeeDesignation",type:"text",label:"Employee's designation",required:!0,placeholder:"e.g. Senior Software Engineer",hint:"The official job title as it appears in the employment contract."},{id:"termination-reason",name:"terminationReason",type:"text",label:"Reason for termination",required:!0,placeholder:"e.g. Redundancy due to restructuring / Gross misconduct",hint:"The legal basis for termination. Vague reasons can be challenged under the Industrial Disputes Act, 1947."},{id:"last-working-day",name:"lastWorkingDay",type:"date",label:"Last working day",required:!0,hint:"The final day of employment. Settlement is typically processed on this date."},{id:"notice-pay",name:"noticePay",type:"number",label:"Notice pay in lieu (₹)",required:!1,min:0,placeholder:"e.g. 45000 (leave blank if not applicable)",hint:"Amount paid instead of serving the notice period. Leave blank if the employee is serving the full notice period."}],"cheque-dishonour":[{id:"cheque-number",name:"chequeNumber",type:"text",label:"Cheque number",required:!0,placeholder:"e.g. 004521",hint:"The 6-digit cheque number printed on the face of the cheque."},{id:"cheque-amount",name:"chequeAmount",type:"number",label:"Cheque amount (₹)",required:!0,min:1,placeholder:"e.g. 100000",hint:"The exact amount on the dishonoured cheque."},{id:"bank-name-branch",name:"bankNameBranch",type:"text",label:"Drawer's bank name & branch",required:!0,placeholder:"e.g. State Bank of India, Connaught Place, New Delhi",hint:"The bank from which the cheque was drawn (the payer's bank). Found on the cheque face."},{id:"dishonour-date",name:"dishonourDate",type:"date",label:"Date of dishonour (bank memo date)",required:!0,hint:"The date on your bank dishonour memo. S.138 NI Act notice must be sent within 30 days of this date."},{id:"s138-deadline",name:"replyDeadlineDays",type:"number",label:"Reply deadline (days)",required:!0,value:"15",min:15,max:15,hint:"Section 138 NI Act requires exactly 15 days. This cannot be changed.",locked:!0}]};function _(e,t){const o=document.getElementById(e+"-error"),a=document.getElementById(e);o&&(o.textContent=t,o.classList.remove("hidden")),a&&(a.classList.add("is-error"),a.setAttribute("aria-invalid","true"))}function T(e){const t=document.getElementById(e+"-error"),o=document.getElementById(e);t&&(t.textContent="",t.classList.add("hidden")),o&&(o.classList.remove("is-error"),o.removeAttribute("aria-invalid"))}function d(e){const t=document.getElementById(e);return t?t.value.trim():""}function f(e){const t=document.getElementById(e);return t?parseFloat(t.value):NaN}function J(e){const t=document.getElementById("dynamic-fields");if(!t)return;const o=k[e]||[];if(o.length===0){t.innerHTML="";return}const a=o.map(r=>{const h=r.required?'required aria-required="true"':"",v=r.min!==void 0?`min="${r.min}"`:"",s=r.max!==void 0?`max="${r.max}"`:"",c=r.value?`value="${r.value}"`:"",n=r.locked?"readonly":"",u=r.locked?'style="background:var(--color-surface-alt);cursor:not-allowed;opacity:0.8;"':"",y=`${r.id}-hint ${r.id}-error`;return`
      <div class="field-group mb-5 animate-fade-in">
        <label class="field-label" for="${r.id}">
          ${r.label}${r.required?' <span aria-hidden="true" style="color:var(--color-error);">*</span>':' <span class="text-xs font-normal" style="color:var(--color-ink-subtle);">(optional)</span>'}
        </label>
        <input
          type="${r.type}"
          id="${r.id}"
          name="${r.name}"
          class="field-input"
          ${r.placeholder?`placeholder="${r.placeholder}"`:""}
          ${h}
          ${v} ${s} ${c} ${n} ${u}
          aria-describedby="${y}"
          autocomplete="off"
        />
        <span id="${r.id}-hint" class="field-hint">${r.hint}</span>
        <span id="${r.id}-error" class="field-error hidden" role="alert"></span>
      </div>
    `}).join("");t.innerHTML=`
    <div class="border-t pt-5 mb-5" style="border-color:var(--color-border);">
      <p class="text-xs font-medium mb-4 uppercase tracking-wide" style="color:var(--color-ink-subtle);">
        Fields for this notice type
      </p>
      ${a}
    </div>
  `}function W(e){let t=!0,o=null;function a(n,u){_(n,u),o||(o=n),t=!1}d("notice-type")||a("notice-type","Please select a notice type."),d("sender-name")||a("sender-name","Your name or company name is required."),d("recipient-name")||a("recipient-name","Recipient name is required.");const s=d("notice-date");if(!s)a("notice-date","Date of notice is required.");else{const n=new Date(s+"T00:00:00"),u=new Date;u.setHours(0,0,0,0);const y=(u-n)/(1e3*60*60*24),m=document.getElementById("notice-date-warning");m&&(y>30?(m.textContent="This date is more than 30 days in the past. Verify this is intentional.",m.classList.remove("hidden")):(m.textContent="",m.classList.add("hidden")))}const c=k[e]||[];for(const n of c){if(!n.required)continue;const u=document.getElementById(n.id);if(!u)continue;const y=u.value.trim();if(!y){a(n.id,`${n.label} is required.`);continue}if(n.type==="number"){const m=parseFloat(y);if(isNaN(m)){a(n.id,`${n.label} must be a valid number.`);continue}if(n.min!==void 0&&m<n.min){n.locked?u.value=String(n.min):n.id==="reply-deadline"||n.id==="money-reply-deadline"?a(n.id,"Minimum 1 day required."):n.id==="amount-due"||n.id==="amount-claimed"||n.id==="cheque-amount"?a(n.id,"Amount must be greater than zero."):n.id==="confidentiality-years"?a(n.id,"Confidentiality period must be at least 1 year."):a(n.id,`Minimum value is ${n.min}.`);continue}if(n.max!==void 0&&m>n.max){n.locked?u.value=String(n.max):n.id==="confidentiality-years"?a(n.id,"Standard NDA periods are 1–10 years."):a(n.id,`Maximum value is ${n.max}.`);continue}}}if(!t&&o){const n=document.getElementById(o);n&&window.innerWidth<768&&n.scrollIntoView({behavior:"smooth",block:"center"})}return t}function q(e){const t={senderName:d("sender-name"),recipientName:d("recipient-name"),date:d("notice-date")};switch(e){case"rent-demand":return{...t,propertyAddress:d("property-address"),amountDue:f("amount-due"),monthsDue:d("months-due"),replyDeadlineDays:Math.max(1,Math.min(90,f("reply-deadline")))};case"money-recovery":return{...t,amountClaimed:f("amount-claimed"),reasonForDebt:d("reason-for-debt"),dateDue:d("date-due"),replyDeadlineDays:Math.max(1,Math.min(90,f("money-reply-deadline")))};case"nda-clause":return{...t,partyA:d("party-a"),partyB:d("party-b"),confidentialityYears:Math.max(1,Math.min(10,f("confidentiality-years"))),jurisdiction:d("jurisdiction")};case"eviction":return{...t,propertyAddress:d("eviction-property"),evictionReason:d("eviction-reason"),vacateByDate:d("vacate-by-date")};case"employment-termination":{const o=document.getElementById("notice-pay"),a=o?o.value.trim():"";return{...t,employeeDesignation:d("employee-designation"),terminationReason:d("termination-reason"),lastWorkingDay:d("last-working-day"),noticePay:a!==""?parseFloat(a):void 0}}case"cheque-dishonour":return{...t,chequeNumber:d("cheque-number"),chequeAmount:f("cheque-amount"),bankNameBranch:d("bank-name-branch"),dishonourDate:d("dishonour-date"),replyDeadlineDays:15};default:return t}}function S(e,t){const o=window.__LNG_TEMPLATES;if(!o)return null;switch(e){case"rent-demand":return o.generateRentDemand(t);case"money-recovery":return o.generateMoneyRecovery(t);case"nda-clause":return o.generateNDAClause(t);case"eviction":return o.generateEviction(t);case"employment-termination":return o.generateEmploymentTermination(t);case"cheque-dishonour":return o.generateChequeDishonour(t);default:return null}}function H(e,t){let o;return(...a)=>{clearTimeout(o),o=setTimeout(()=>e(...a),t)}}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("notice-form"),t=document.getElementById("notice-type"),o=document.getElementById("notice-date");if(o&&!o.value){const c=new Date().toISOString().split("T")[0];o.value=c}e?.querySelectorAll("input, select").forEach(s=>{s.addEventListener("input",()=>T(s.id)),s.addEventListener("change",()=>T(s.id))}),t?.addEventListener("change",()=>{const s=t.value;J(s),T("notice-type"),v(s)});let a=!1;function r(s){if(!a||!s)return;const c=q(s),n=S(s,c);n&&A(n)}const h=H(s=>r(s),600);function v(s){document.getElementById("dynamic-fields")?.querySelectorAll("input").forEach(n=>{n.addEventListener("input",()=>h(s))}),["sender-name","recipient-name","notice-date"].forEach(n=>{document.getElementById(n)?.addEventListener("input",()=>h(s))})}e?.addEventListener("submit",s=>{s.preventDefault();const c=t?.value||"";if(e.querySelectorAll(".field-error").forEach(w=>{w.textContent="",w.classList.add("hidden")}),e.querySelectorAll(".field-input").forEach(w=>{w.classList.remove("is-error"),w.removeAttribute("aria-invalid")}),!W(c))return;const y=q(c),m=S(c,y);if(!m){A(null,"An error occurred generating the notice. Please check your inputs.");return}a=!0,A(m),v(c)})});function A(e,t){window.dispatchEvent(new CustomEvent("lng:preview-update",{detail:{text:e,errorMsg:t}}))}let g="",I="";const R=document.getElementById("preview-empty"),P=document.getElementById("preview-content"),M=document.getElementById("preview-error"),L=document.getElementById("preview-error-msg"),C=document.getElementById("preview-text"),E=document.getElementById("copy-btn"),$=document.getElementById("download-btn"),N=document.getElementById("copy-toast");function z(e){g=e,C&&(C.textContent=e),R?.classList.add("hidden"),M?.classList.add("hidden"),P?.classList.remove("hidden"),E&&(E.disabled=!1),$&&($.disabled=!1)}function Q(e){R?.classList.add("hidden"),P?.classList.add("hidden"),M?.classList.remove("hidden"),L&&(L.textContent=e||"An error occurred."),E&&(E.disabled=!0),$&&($.disabled=!0)}window.addEventListener("lng:preview-update",e=>{const{text:t,errorMsg:o,noticeType:a}=e.detail;a&&(I=a),o?Q(o):t&&z(t)});document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("notice-type");e?.addEventListener("change",()=>{I=e.value})});E?.addEventListener("click",async()=>{if(g)try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(g);else{const e=document.createElement("textarea");e.value=g,e.style.position="fixed",e.style.opacity="0",document.body.appendChild(e),e.focus(),e.select(),document.execCommand("copy"),document.body.removeChild(e)}O()}catch{O("Failed to copy. Please select and copy the text manually.")}});$?.addEventListener("click",()=>{if(!g)return;const e=new Date().toISOString().split("T")[0],o=`legal-${I||"notice"}-${e}.txt`,a=new Blob([g],{type:"text/plain;charset=utf-8"}),r=URL.createObjectURL(a),h=document.createElement("a");h.href=r,h.download=o,document.body.appendChild(h),h.click(),document.body.removeChild(h),URL.revokeObjectURL(r)});let x=null;function O(e){N&&(e&&(N.querySelector("svg")?.remove(),N.textContent=e),N.classList.add("is-visible"),clearTimeout(x),x=setTimeout(()=>{N.classList.remove("is-visible")},2500))}
