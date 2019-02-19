export class User {
        public UserId: number;
        public UserCode: string;
        public LoginName: string;
        public FullName: string;
        public Password: string;
        public EmailId: string;
        public FkBankId: number;
        public FkBranchId: number;
        public UserType: string;
        public Designation: string;
}

export class MyObj {
    isValid: boolean;
}