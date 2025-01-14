/* eslint-disable react/no-unescaped-entities */
import { DottedSeparator } from "@/components/dotted-separator"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"



const PrivacyPage = () => {
    return (
        <Card className="w-full h-full md:w-[487px] border-none shadow-none">
            <CardHeader className="flex items-center justify-center text-center p-7">
                <CardTitle className="text-2xl">Privacy Policy</CardTitle>
                <CardDescription>
                    Effective Date: 01/01/2025

                    <ol className="space-y-4 text-gray-500 list-decimal list-inside dark:text-gray-400">
                        <li>
                            Welcome to Project Management. This Privacy Policy explains how we collect, use, disclose,
                            and protect your information when you use our free Project Management web application ("Service").
                            By using our Service, you agree to the practices described in this Privacy Policy.
                        </li>
                        <li>
                            We collect the following types of information:
                            a. Personal Information You Provide
                            <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                                <li>Name, email address, and other contact details when you create an account.</li>
                                <li>Any data you choose to input into the Service, such as project details, tasks, and notes.</li>
                            </ul>
                            b. Automatically Collected Information
                            <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                                <li>Log data, including IP address, browser type, device type, and access times.</li>
                                <li>Usage data, such as pages visited and features used.</li>
                            </ul>
                            c. Cookies and Tracking Technologies
                            <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                                <li>We use cookies and similar technologies to enhance your user experience and analyze usage patterns.</li>
                            </ul>
                        </li>
                        <li>We use the collected information to:
                            <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                                <li>Provide, maintain, and improve our Service.</li>
                                <li>Communicate with you regarding updates, support, or feedback.</li>
                                <li>Ensure security and detect/prevent fraudulent or unauthorized activity.</li>
                                <li>Analyze usage to improve functionality and user experience.</li>
                            </ul>
                        </li>
                    </ol>

                </CardDescription>
            </CardHeader>
            <div className="px-7">
                <DottedSeparator />
            </div>

        </Card>
    )
}

export default PrivacyPage