// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract EmploymentContract {
    enum SickLeaveStatus {
        pending,
        confirmed,
        declined
    }

    struct SickLeaveUnit {
        uint48 startDate;
        uint48 endDate;
        uint256 paymentAmount;
        SickLeaveStatus status;
    }

    struct SickLeave {
        uint48 totalDays;
        uint48 usedDays;
        SickLeaveUnit[] sickLeaveList;
    }

    struct Salary {
        uint48 salaryPerMonth;
        uint48[] salaryList;
    }

    event SickLeaveTransaction(address sender, address reciever, uint amount);

    address public head;
    uint48 public endDate;
    address public employer;
    address public employee;
    uint48 public startDate;
    bool public isActive;
    bytes32 public agreementHash;

    Salary public salary;
    SickLeave public sickLeave;

    constructor(
        address _employer,
        address _employee,
        bytes32 _agreementHash,
        uint48 _startDate,
        uint48 _endDate,
        uint48 _salaryPerMonth,
        uint48 _totalSickDays
    ) {
        head = msg.sender;
        employer = _employer;
        employee = _employee;
        agreementHash = _agreementHash;
        startDate = _startDate;
        endDate = _endDate;
        isActive = true;

        uint48[] memory salaryList;
        salary = Salary(_salaryPerMonth, salaryList);

        SickLeaveUnit[] memory sickLeaveList;
        sickLeave = SickLeave(_totalSickDays, 0,  sickLeaveList);
    }

    modifier onlyHeadOrEmployer() {
        require(
            msg.sender == employer || msg.sender == head,
            "Only the HEAD or employer can perform this action"
        );
        _;
    }

    modifier onlyEmployer() {
        require(
            msg.sender == employer,
            "Only the employer can perform this action"
        );
        _;
    }

    modifier activeContract() {
        require(isActive, "Contract is not active");
        _;
    }

    function isContractActive() public view returns (bool) {
        return (isActive);
    }

    // TODO: ONLY HEAD
    function activateContract() public {
        require(address(this).balance >= 200, "Insufficient balance");

        isActive = true;
    }

    function terminateContract() public onlyEmployer {
        isActive = false;
    }

    function getContractAgreementHash() public view returns (bytes32) {
        return (agreementHash);
    }

    function paySalary() public payable onlyEmployer activeContract {
        require(msg.value == salary.salaryPerMonth, "Incorrect salary amount");
        payable(employee).transfer(msg.value);
    }

    function requestSickLeave(uint48 _startDate, uint48 _endDate) public {
        // TODO: recalculate issue
        uint daysDiff = (_endDate - _startDate) / 86400;
        uint availableSickDays = sickLeave.totalDays - sickLeave.usedDays;

        require(
            msg.sender == employee,
            "Only the employee can request sick leave"
        );
        require(
            block.timestamp <= _startDate,
            "StartDate should be in feature"
        );
        require(
            _endDate > _startDate,
            "EndDate should be greater than StartDate"
        );
        require(daysDiff <= availableSickDays, "Exceeding sick leave days");

        SickLeaveUnit memory newSick = SickLeaveUnit(
            _startDate,
            _endDate,
        1 * daysDiff,
            SickLeaveStatus.pending
        );


        SickLeaveUnit[] storage list = sickLeave.sickLeaveList;
        list.push(newSick);
    }

    function paySickLeave(
        uint8 _index
    ) public payable onlyEmployer activeContract {
        SickLeaveUnit memory sickLeaveItem = sickLeave.sickLeaveList[_index];

        require(
            sickLeaveItem.status == SickLeaveStatus.pending,
            "Sick leave will be in pending"
        );

        payable(employer).transfer(sickLeaveItem.paymentAmount);

        emit SickLeaveTransaction(
            employer,
            employee,
            sickLeaveItem.paymentAmount
        );
    }
}
