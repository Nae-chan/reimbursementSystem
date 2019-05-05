/**
 * This hold the class for Reimbursement, which is a single reimbursements
 * an employee would submit
 */


export class Reimbursement {
    reimbursementId: number; // primary key
    author: number;  // foreign key -> User, not null
    amount: number;  // not null
    dateSubmitted: string; // not null
    dateResolved: string;
    description: string; // not null
    resolver: number; // foreign key -> User
    status: number; // foreign ey -> ReimbursementStatus, not null
    type: number; // foreign key -> ReimbursementType

    constructor (reimbursementId, author, amount, dateSubmitted, dateResolved,
         description, resolver, status, type) {
        this.reimbursementId = reimbursementId;
        this.author = author;
        this.amount = amount;
        this.dateSubmitted = dateSubmitted;
        this.dateResolved = dateResolved;
        this.description = description;
        this.resolver = resolver;
        this.status = status;
        this.type = type;

    }
  }