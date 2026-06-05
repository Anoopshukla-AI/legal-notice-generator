// Legal notice template generators for Legal Notice Generator
// All templates use Indian legal language exactly as specified.
// No simplification of legal terminology.

// ─── Types ───────────────────────────────────────────────────────────────────

export type NoticeType =
  | 'rent-demand'
  | 'money-recovery'
  | 'eviction'
  | 'employment-termination'
  | 'cheque-dishonour'
  | 'nda-clause'
  | 'payment-default-clause'
  | 'confidentiality-clause'
  | 'termination-clause';

export interface BaseData {
  senderName: string;
  recipientName: string;
  date: string; // ISO date string
}

export interface RentDemandData extends BaseData {
  propertyAddress: string;
  amountDue: number;
  monthsDue: string;
  replyDeadlineDays: number;
}

export interface MoneyRecoveryData extends BaseData {
  amountClaimed: number;
  reasonForDebt: string;
  dateDue: string; // ISO date string
  replyDeadlineDays: number;
}

export interface NDAClauseData extends BaseData {
  partyA: string;
  partyB: string;
  confidentialityYears: number;
  jurisdiction: string;
}

export interface EvictionData extends BaseData {
  propertyAddress: string;
  evictionReason: string;
  vacateByDate: string; // ISO date string
}

export interface EmploymentTerminationData extends BaseData {
  employeeDesignation: string;
  terminationReason: string;
  lastWorkingDay: string; // ISO date string
  noticePay?: number; // optional
}

export interface ChequeDishonourData extends BaseData {
  chequeNumber: string;
  chequeAmount: number;
  bankNameBranch: string;
  dishonourDate: string; // ISO date string
  replyDeadlineDays: 15; // locked
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Format a number as Indian Rupee notation.
 * e.g. 120000 → ₹1,20,000/-
 */
export function formatINR(n: number): string {
  return '₹' + n.toLocaleString('en-IN') + '/-';
}

/**
 * Format an ISO date string as Indian long-form date.
 * e.g. "2025-06-03" → "3rd June 2025"
 */
export function formatDate(iso: string): string {
  const date = new Date(iso + 'T00:00:00'); // force local date parse
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/**
 * Sanitize a required field value.
 * Empty or whitespace-only values fall back to "[NOT PROVIDED]".
 */
export function sanitize(value: string | undefined | null): string {
  if (!value || value.trim() === '') return '[NOT PROVIDED]';
  return value.trim();
}

/**
 * Sanitize an optional field — returns undefined if empty (caller omits sentence).
 */
export function sanitizeOptional(value: string | number | undefined | null): string | undefined {
  if (value === undefined || value === null || String(value).trim() === '') return undefined;
  return String(value).trim();
}

// ─── Shared Disclaimer ────────────────────────────────────────────────────────

const NOTICE_DISCLAIMER = `─────────────────────────────────────────────────────────────────
IMPORTANT: This is a reference template only. Consult a registered
advocate before using this notice for any formal or legal purpose.
─────────────────────────────────────────────────────────────────`;

const RPAD_NOTE = `NOTE: Send this notice by Registered Post with Acknowledgment Due (RPAD)
for the strongest legal record in Indian courts.`;

// ─── Notice Generators ────────────────────────────────────────────────────────

export function generateRentDemand(data: RentDemandData): string {
  const deadline = Math.max(1, Math.min(90, data.replyDeadlineDays));

  return `LEGAL NOTICE — RENT DEMAND
${formatDate(data.date)}

TO,
${sanitize(data.recipientName)}

FROM,
${sanitize(data.senderName)}

SUBJECT: Legal Notice Demanding Payment of Outstanding Rent

Sir/Madam,

I, ${sanitize(data.senderName)}, am the owner/landlord of the property situated at ${sanitize(data.propertyAddress)} (hereinafter referred to as "the said premises").

You are the tenant in occupation of the said premises under an agreement of tenancy/leave and licence. As on the date of this notice, you are in arrears of rent amounting to ${formatINR(data.amountDue)} (Rupees ${sanitize(data.amountDue.toString())} only) in respect of the following period(s): ${sanitize(data.monthsDue)}.

Despite repeated requests and reminders, you have failed and neglected to pay the said rent dues. Your continued non-payment constitutes a breach of the terms of tenancy and gives rise to my rights under the applicable State Rent Control Act and the Transfer of Property Act, 1882.

You are, therefore, hereby called upon to pay the entire outstanding amount of ${formatINR(data.amountDue)} within ${deadline} (${sanitize(deadline.toString())}) days from the date of receipt of this notice, failing which I shall be constrained to initiate appropriate legal proceedings against you for recovery of arrears of rent and for eviction from the said premises, at your cost and risk, without any further notice to you.

Please treat this communication as a formal legal notice.

Yours faithfully,

${sanitize(data.senderName)}
Date: ${formatDate(data.date)}

${RPAD_NOTE}

${NOTICE_DISCLAIMER}`;
}

export function generateMoneyRecovery(data: MoneyRecoveryData): string {
  const deadline = Math.max(1, Math.min(90, data.replyDeadlineDays));

  return `DEMAND LETTER — MONEY RECOVERY
${formatDate(data.date)}

TO,
${sanitize(data.recipientName)}

FROM,
${sanitize(data.senderName)}

SUBJECT: Demand for Recovery of Outstanding Dues

Dear Sir/Madam,

I, ${sanitize(data.senderName)}, write this formal demand letter to call upon you to repay the sum lawfully due and payable to me.

You are indebted to me in the sum of ${formatINR(data.amountClaimed)} (the "Outstanding Amount") on account of: ${sanitize(data.reasonForDebt)}.

The said amount became due and payable on or before ${formatDate(data.dateDue)}, and despite the lapse of sufficient time and repeated requests, you have failed to discharge your financial obligation.

This notice is issued calling upon you to pay the Outstanding Amount of ${formatINR(data.amountClaimed)} in full to me within ${deadline} (${sanitize(deadline.toString())}) days from the date of receipt of this notice.

Should you fail to make the said payment within the stipulated period, I shall be left with no alternative but to initiate appropriate civil and/or legal proceedings before the competent court or tribunal for recovery of the said dues together with interest and costs, entirely at your risk and expense.

Yours faithfully,

${sanitize(data.senderName)}
Date: ${formatDate(data.date)}

${RPAD_NOTE}

${NOTICE_DISCLAIMER}`;
}

export function generateNDAClause(data: NDAClauseData): string {
  const years = Math.max(1, Math.min(10, data.confidentialityYears));

  return `NON-DISCLOSURE AGREEMENT — CONFIDENTIALITY CLAUSE
Date: ${formatDate(data.date)}
Parties: ${sanitize(data.partyA)} ("Party A") and ${sanitize(data.partyB)} ("Party B")

This Mutual Non-Disclosure Agreement Clause ("Agreement") is entered into as of ${formatDate(data.date)} between ${sanitize(data.partyA)} ("Party A") and ${sanitize(data.partyB)} ("Party B"), collectively referred to as "the Parties."

1. DEFINITION OF CONFIDENTIAL INFORMATION
   "Confidential Information" means any information, technical data, trade secrets, know-how, business plans, financial information, customer lists, or other information disclosed by either Party to the other, either directly or indirectly, in writing, orally, or by any other means, that is designated as confidential or that reasonably should be understood to be confidential given the nature of the information and the circumstances of disclosure.

2. OBLIGATIONS OF NON-DISCLOSURE
   Each Party agrees to: (a) hold the other Party's Confidential Information in strict confidence; (b) not to disclose such information to any third party without the prior written consent of the disclosing Party; (c) use the Confidential Information solely for the purpose of evaluating or advancing the mutual business relationship between the Parties; and (d) limit access to Confidential Information to its employees, agents, or advisors who have a genuine need-to-know and who are bound by confidentiality obligations at least as protective as those set forth herein.

3. EXCLUSIONS
   The obligations under this Agreement shall not apply to information that: (a) is or becomes publicly available through no breach by the receiving Party; (b) was already known to the receiving Party without restriction before disclosure; (c) is independently developed by the receiving Party without use of the Confidential Information; or (d) is required to be disclosed by applicable law, regulation, or court order, provided that the receiving Party gives the disclosing Party prompt prior written notice and cooperates in seeking a protective order.

4. TERM
   The confidentiality obligations imposed by this Agreement shall remain in full force and effect for a period of ${years} (${sanitize(years.toString())}) year${years === 1 ? '' : 's'} from the date of this Agreement, unless earlier terminated by mutual written agreement of the Parties.

5. GOVERNING LAW AND JURISDICTION
   This Agreement shall be governed by and construed in accordance with the laws of ${sanitize(data.jurisdiction)}. Any disputes arising out of or in connection with this Agreement shall be subject to the exclusive jurisdiction of the courts at ${sanitize(data.jurisdiction)}.

NOTE: This is a mutual NDA clause — it binds both Parties equally. For a
one-sided (unilateral) NDA where only one party discloses, specify the
disclosing party clearly with the assistance of your legal counsel.

${NOTICE_DISCLAIMER}`;
}

export function generateEviction(data: EvictionData): string {
  return `LEGAL NOTICE — EVICTION
${formatDate(data.date)}

TO,
${sanitize(data.recipientName)}

FROM,
${sanitize(data.senderName)}

SUBJECT: Legal Notice for Vacation of Premises / Eviction

Sir/Madam,

I, ${sanitize(data.senderName)}, am the owner/landlord of the premises situated at ${sanitize(data.propertyAddress)} (hereinafter referred to as "the said premises").

You are presently in occupation of the said premises as a tenant/licensee. I hereby call upon you to vacate and deliver peaceful possession of the said premises on the following ground(s): ${sanitize(data.evictionReason)}.

You are hereby required to vacate the said premises, remove all your belongings, and deliver peaceful and vacant possession thereof to me on or before ${formatDate(data.vacateByDate)}.

Should you fail to vacate the said premises on or before the aforesaid date, I shall be constrained to initiate appropriate legal proceedings under the applicable State Rent Control Act and/or the Transfer of Property Act, 1882 for your eviction, recovery of mesne profits, and damages, entirely at your cost and risk.

Please treat this as final notice. No further reminder will be issued.

Yours faithfully,

${sanitize(data.senderName)}
Date: ${formatDate(data.date)}

${RPAD_NOTE}

${NOTICE_DISCLAIMER}`;
}

export function generateEmploymentTermination(data: EmploymentTerminationData): string {
  const noticePayLine =
    data.noticePay !== undefined && data.noticePay > 0
      ? `\nIn lieu of the notice period, you will be paid notice pay amounting to ${formatINR(data.noticePay)} (Rupees ${data.noticePay.toLocaleString('en-IN')} only) along with your full and final settlement.`
      : '';

  return `EMPLOYMENT TERMINATION NOTICE
${formatDate(data.date)}

TO,
${sanitize(data.recipientName)}
Designation: ${sanitize(data.employeeDesignation)}

FROM,
${sanitize(data.senderName)}

SUBJECT: Notice of Termination of Employment

Dear ${sanitize(data.recipientName)},

This letter serves as formal notice that your employment with ${sanitize(data.senderName)} in the capacity of ${sanitize(data.employeeDesignation)} is terminated with effect from ${formatDate(data.lastWorkingDay)}.

The reason(s) for this termination are as follows: ${sanitize(data.terminationReason)}.

Your last working day with the organisation shall be ${formatDate(data.lastWorkingDay)}.${noticePayLine}

You are requested to: (a) complete all pending handover formalities and documentation before your last working day; (b) return all company property, access cards, equipment, and confidential documents; and (c) ensure proper knowledge transfer to your designated successor or manager.

Your final settlement, including payment of all lawfully due dues, shall be processed in accordance with the applicable provisions of the Industrial Disputes Act, 1947 and the Payment of Wages Act, 1936 (as applicable).

This termination does not affect any post-employment obligations, including obligations of confidentiality and non-solicitation, if any, under your employment agreement.

Yours faithfully,

${sanitize(data.senderName)}
Date: ${formatDate(data.date)}

${NOTICE_DISCLAIMER}`;
}

export function generateChequeDishonour(data: ChequeDishonourData): string {
  // Deadline is legally fixed at 15 days under S.138 NI Act — clamp silently.
  const deadline = 15;

  return `LEGAL NOTICE — CHEQUE DISHONOUR (SECTION 138, NEGOTIABLE INSTRUMENTS ACT, 1881)
${formatDate(data.date)}

TO,
${sanitize(data.recipientName)}

FROM,
${sanitize(data.senderName)}

SUBJECT: Legal Notice Under Section 138 of the Negotiable Instruments Act, 1881
         for Dishonour of Cheque No. ${sanitize(data.chequeNumber)}

Sir/Madam,

I, ${sanitize(data.senderName)}, am writing to serve upon you this statutory legal notice under Section 138 of the Negotiable Instruments Act, 1881 ("the Act").

FACTUAL BACKGROUND:
You had issued Cheque No. ${sanitize(data.chequeNumber)} dated ${formatDate(data.date)} drawn on ${sanitize(data.bankNameBranch)}, for a sum of ${formatINR(data.chequeAmount)} (Rupees ${sanitize(data.chequeAmount.toString())} only), in discharge of a legally enforceable liability/debt owed to me.

Upon presentation of the aforesaid cheque through banking channels, the said cheque was returned unpaid/dishonoured on ${formatDate(data.dishonourDate)} by the drawee bank on grounds of "insufficient funds" / technical dishonour, as evidenced by the bank dishonour memo.

STATUTORY NOTICE:
Under Section 138 of the Negotiable Instruments Act, 1881, you are hereby called upon to pay the entire cheque amount of ${formatINR(data.chequeAmount)} to me within ${deadline} (fifteen) days from the date of receipt of this notice.

CONSEQUENCE OF NON-PAYMENT:
Failure to make the said payment within the stipulated ${deadline}-day period will render you liable for prosecution under Section 138 of the Negotiable Instruments Act, 1881, which is a cognisable offence punishable with imprisonment for a term which may extend to two years, or with a fine which may extend to twice the amount of the cheque, or with both.

STATUTORY CAUTION: Section 138 of the NI Act requires this legal notice to be
sent within 30 days of the bank dishonour memo date. Verify your bank memo
date to ensure compliance with this mandatory limitation period. This tool
cannot enforce that deadline — you must calculate this independently.

Yours faithfully,

${sanitize(data.senderName)}
Date: ${formatDate(data.date)}

${RPAD_NOTE}

${NOTICE_DISCLAIMER}`;
}

// ─── Clause Library Types ────────────────────────────────────────────────────

export interface PaymentDefaultClauseData extends BaseData {
  amount: number;
  dueDate: string;      // ISO date string
  lateInterestRate?: number; // % per month, optional
  jurisdiction: string;
}

export interface ConfidentialityClauseData extends BaseData {
  informationNature: string;
  confidentialityYears: number;
  jurisdiction: string;
}

export interface TerminationClauseData extends BaseData {
  employeeDesignation: string;
  noticePeriodDays: number;
  severancePay?: number;   // optional
  jurisdiction: string;
}

// ─── Clause Library Generators ───────────────────────────────────────────────

export function generatePaymentDefaultClause(data: PaymentDefaultClauseData): string {
  const interestLine =
    data.lateInterestRate !== undefined && data.lateInterestRate > 0
      ? `\n3. LATE PAYMENT INTEREST\n   In the event of default, the Obligor shall pay interest on the outstanding Principal Amount at the rate of ${data.lateInterestRate}% (${sanitize(data.lateInterestRate.toString())} percent) per month from the due date until the date of actual payment, compounded monthly.\n`
      : '';

  return `PAYMENT DEFAULT CLAUSE
Date: ${formatDate(data.date)}
Parties: ${sanitize(data.senderName)} ("Payee") and ${sanitize(data.recipientName)} ("Obligor")

This Payment Default Clause forms part of the agreement between ${sanitize(data.senderName)} (the "Payee") and ${sanitize(data.recipientName)} (the "Obligor") and shall be read as an integral term thereof.

1. PAYMENT OBLIGATION
   The Obligor shall pay to the Payee the principal sum of ${formatINR(data.amount)} (the "Principal Amount") on or before ${formatDate(data.dueDate)}.
${interestLine}
2. EVENTS OF DEFAULT
   An event of default ("Event of Default") shall occur if the Obligor: (a) fails to pay the Principal Amount by the stipulated due date; (b) becomes insolvent, is adjudicated bankrupt, or enters into any scheme of arrangement with its creditors without the prior written consent of the Payee; or (c) makes any material misrepresentation in connection with this obligation.

3. REMEDIES ON DEFAULT
   Upon the occurrence of an Event of Default, the Payee shall be entitled to: (a) declare the entire outstanding amount, together with accrued interest if any, immediately due and payable without further notice to the Obligor; (b) initiate civil recovery proceedings under Order 37 of the Code of Civil Procedure, 1908 before the competent court; (c) recover all reasonable costs of recovery, including legal fees and court costs, from the Obligor.

4. GOVERNING LAW
   This clause shall be governed by and construed in accordance with the laws of India. Any dispute arising out of or in connection with this clause shall be subject to the exclusive jurisdiction of the competent courts at ${sanitize(data.jurisdiction)}.

${NOTICE_DISCLAIMER}`;
}

export function generateConfidentialityClause(data: ConfidentialityClauseData): string {
  const years = Math.max(1, Math.min(10, data.confidentialityYears));

  return `CONFIDENTIALITY CLAUSE
Date: ${formatDate(data.date)}
Disclosing Party: ${sanitize(data.senderName)}
Receiving Party:  ${sanitize(data.recipientName)}

This Confidentiality Clause governs the disclosure and protection of confidential information between ${sanitize(data.senderName)} (the "Disclosing Party") and ${sanitize(data.recipientName)} (the "Receiving Party") and forms an integral part of the agreement between the Parties.

1. DEFINITION OF CONFIDENTIAL INFORMATION
   "Confidential Information" means ${sanitize(data.informationNature)}, including but not limited to technical data, trade secrets, proprietary methodologies, business plans, financial data, customer information, pricing, and any other information the Disclosing Party designates as confidential or which the Receiving Party knows or reasonably ought to know is confidential.

2. NON-DISCLOSURE OBLIGATION
   The Receiving Party agrees to: (a) maintain the Confidential Information in strict confidence, applying no less than the same degree of care it uses to protect its own confidential information, and in no event less than reasonable care; (b) not disclose, publish, or otherwise reveal the Confidential Information to any third party without the prior written consent of the Disclosing Party; and (c) use the Confidential Information solely for the purposes expressly contemplated by the parties' agreement.

3. PERMITTED DISCLOSURES
   The Receiving Party may disclose Confidential Information to its employees, agents, or professional advisors who have a genuine need to know and are bound by confidentiality obligations at least as stringent as those set forth herein. The Receiving Party shall remain fully liable for any breach by such persons.

4. EXCLUSIONS
   This clause shall not apply to information that: (a) is or becomes publicly available through no fault of the Receiving Party; (b) was already in the Receiving Party's possession without restriction prior to disclosure; (c) is independently developed by the Receiving Party without reference to the Confidential Information; or (d) is required to be disclosed by applicable law or court order, provided that prompt written notice is given to the Disclosing Party to enable it to seek a protective order.

5. DURATION
   The confidentiality obligations under this clause shall remain in force for a period of ${years} (${sanitize(years.toString())}) year${years === 1 ? '' : 's'} from the date of disclosure.

6. GOVERNING LAW
   This clause shall be governed by and construed in accordance with the laws of India and shall be enforceable before the competent courts at ${sanitize(data.jurisdiction)}.

${NOTICE_DISCLAIMER}`;
}

export function generateTerminationClause(data: TerminationClauseData): string {
  const severanceClause =
    data.severancePay !== undefined && data.severancePay > 0
      ? `\n5. SEVERANCE COMPENSATION\n   Upon termination by the Employer without cause, the Employer shall pay the Employee severance compensation of ${formatINR(data.severancePay)}, subject to applicable tax deductions, in addition to all statutory dues.\n`
      : '';

  return `EMPLOYMENT TERMINATION CLAUSE
Date: ${formatDate(data.date)}
Employer: ${sanitize(data.senderName)}
Role:     ${sanitize(data.employeeDesignation)}

This Employment Termination Clause governs the conditions and consequences of termination of employment for the position of ${sanitize(data.employeeDesignation)} with ${sanitize(data.senderName)} (the "Employer") and forms part of the applicable employment contract or standing orders.

1. TERMINATION BY EMPLOYER
   The Employer may terminate the employment of a person holding the position of ${sanitize(data.employeeDesignation)}: (a) for cause — including gross misconduct, wilful negligence, fraud, or material breach of employment obligations — with immediate effect and without notice; or (b) without cause — by giving ${data.noticePeriodDays} (${sanitize(data.noticePeriodDays.toString())}) days' prior written notice, or by paying salary in lieu of such notice.

2. RESIGNATION BY EMPLOYEE
   The Employee may voluntarily terminate employment by giving ${data.noticePeriodDays} (${sanitize(data.noticePeriodDays.toString())}) days' prior written notice to the Employer. Failure to serve the full notice period may result in recovery of an equivalent amount from the Employee's final settlement dues.

3. POST-TERMINATION OBLIGATIONS
   Upon termination, the Employee shall: (a) return all company property, equipment, and documents in good condition; (b) complete all handover procedures as directed by the Employer; (c) maintain confidentiality of all proprietary and business-sensitive information; and (d) honour all post-employment covenants in the employment agreement, including non-compete and non-solicitation obligations where applicable.

4. FINAL SETTLEMENT
   The Employer shall process the Employee's full and final settlement — including earned wages, accrued leave encashment, gratuity (if applicable), and all other statutory dues — within the timelines prescribed under the Payment of Wages Act, 1936 and applicable State Shops and Establishments legislation.
${severanceClause}
6. GOVERNING LAW
   This clause shall be governed by the laws of India, including the Industrial Disputes Act, 1947, the Payment of Wages Act, 1936, and the Contract Labour (Regulation and Abolition) Act, 1970, as applicable. Disputes shall be subject to the exclusive jurisdiction of the competent courts at ${sanitize(data.jurisdiction)}.

${NOTICE_DISCLAIMER}`;
}
