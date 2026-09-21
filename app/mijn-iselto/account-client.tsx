"use client";
import {authClient} from "@/lib/auth/client";
export function AccountClient(){async function out(){await authClient.signOut();location.href="/mijn-iselto/login"}return <div className="portal-actions" style={{marginTop:25}}><button className="portal-btn" onClick={out}>Uitloggen</button></div>}
