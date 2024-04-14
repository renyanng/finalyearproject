// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract TwoFactor {
    address public owner1;
    address public owner2;
    uint256 public id;

    event NewInitiateTransaction(address _to, address _from, uint256 _amount);
    event NewWithdraw(address _to, uint256 _amount);
    struct Transaction {
        address payable to;
        uint256 amount;
        bool signedByOwnerOne;
        bool signedByOwnerTwo;
        bool success;
    }
    Transaction[] public transactions;

    constructor() {
        owner1 = address(0xB40b3a2c15c7eE0E5c38A13ff5C8c28B40129d2c);
        owner2 = address(0x8C0d8Cb847fc8605189A8a8C94beB5F8B0ae850C);
    }

    modifier onlyOwner() {
        require(msg.sender == owner1 || msg.sender == owner2);
        _;
    }

    function initiateTransaction(
        address payable _to,
        uint256 _amount
    ) public onlyOwner returns (uint256) {
        Transaction memory transaction;
        transaction.to = _to;
        transaction.amount = _amount;
        transaction.success = false;
        if (msg.sender == owner1) {
            transaction.signedByOwnerOne = true;
        } else {
            transaction.signedByOwnerTwo = true;
        }
        transactions.push(transaction);
        emit NewInitiateTransaction(_to, msg.sender, _amount);
        return id++;
    }

    function approveTransaction(uint256 _id) public onlyOwner {
        require(_id < transactions.length);
        if (msg.sender == owner1) {
            transactions[_id].signedByOwnerOne = true;
        } else {
            transactions[_id].signedByOwnerTwo = true;
        }
        withdraw(_id);
    }

    function withdraw(uint256 _id) private {
        require(address(this).balance >= transactions[_id].amount);
        require(
            transactions[_id].signedByOwnerOne &&
                transactions[_id].signedByOwnerTwo
        );
        require(transactions[_id].success != true);
        transactions[_id].to.transfer(transactions[_id].amount);
        transactions[_id].success = true;
        emit NewWithdraw(transactions[_id].to, transactions[_id].amount);
    }

    receive() external payable {}

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function getTransactions() public view returns (Transaction[] memory) {
        return transactions;
    }
}
