package com.rest.service;

import com.rest.model.BankAccount;

public interface AccountService {
	public BankAccount saveAccount(BankAccount bankAccount);
	public BankAccount depositTransfer(int toAccountNumber, double amount);
	public BankAccount getBankDetails(int accountNumber, String accountName, String password);
	public  BankAccount deposit(int accountNumber,String accountName,String password, double amount);
	public  BankAccount transfer(int accountNumber,String accountName,String password, int accountNumber1,double amount1);
	public BankAccount withdraw(int accountNumber, String accountName, String password, double amount);
	public BankAccount getTargAccountBankDetails(int targetAccountNumber);
	public BankAccount closeAccount(int accountNumber, String accountName, String password);
	public void deleteAccount(int accountNumber);
	public BankAccount updateAccountDetails(BankAccount bankAccount,int accountNumber);
}
