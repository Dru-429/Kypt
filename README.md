# 🚀 KRYPT: Secure & Tracked Course Payments with Solidity 

Welcome to **KRYPT**, a project designed to demonstrate how to build a secure and transparent payment system for online courses using Solidity smart contracts! 

## 💡 What is KRYPT?

KRYPT allows users to pay for courses directly on the blockchain using their cryptocurrency wallets.  Here's what makes KRYPT special:

* **🔐 Secure Solidity Contract:** A robust smart contract accepts payments and emits events for every successful transaction.
* **🌐 User-Friendly Frontend:** A simple web interface lets users connect their wallets and make payments seamlessly.
* **📜 Transaction History:** KRYPT records all payment transactions, providing a transparent and auditable history for users and administrators.
* **🔑 Instant Course Access:** Upon successful payment, users gain immediate access to the purchased course.
* **🤖 Centralized Backend Watcher:** A backend service monitors the smart contract and automatically grants course access upon payment confirmation.

## 🛠️ Project Structure

The KRYPT project is organized into the following components:

* **`contracts/Payment.sol`:** The Solidity smart contract responsible for accepting payments and emitting events.
* **`frontend/`:** The React-based frontend application for user interaction and wallet connection.
* **`backend/`:** The Node.js backend service that listens for contract events and manages course access.


