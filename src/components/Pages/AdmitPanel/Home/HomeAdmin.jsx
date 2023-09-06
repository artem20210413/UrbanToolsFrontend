import React from "react";
import "../../../layouts/AdminPanel/Layout";
import AdminHeader from "../../../layouts/AdminPanel/AdminHeader";

export default function HomeAdmin() {

    return (
        <div>
            <AdminHeader/>
            <button type="button" className="btn btn-primary">Primary</button>
        </div>
    );
}
